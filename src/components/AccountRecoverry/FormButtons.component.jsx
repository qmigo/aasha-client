import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isUserExistHandler,
  sendRequestForOTPVerification,
} from "../../store/actions/accoutRecovery.actions";
import {
  backSetStep,
  nextSetStep,
} from "../../store/reducers/accountRecovery.Reducer";

import Button from "../Button/Button.component";
import LoadingSpinner from "../UI/LoadingSpinner.component";

const FormButtons = () => {
  const step = useSelector((state) => state.accountRecovery.step);
  const isLoading = useSelector((state) => state.ui.isLoading);
  const isFormValid = useSelector((state) => state.accountRecovery.isFormValid);
  const username = useSelector((state) => state.accountRecovery.username);
  const otp = useSelector((state) => state.accountRecovery.otp);

  const dispatch = useDispatch();
  const buttonTitle = !isFormValid ? "Fill The Form Correctly!" : "";

  const userExistHandler = () => {
    if (!isFormValid) return;
    dispatch(isUserExistHandler({ username }));
  };
  if (step === 0) {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    return (
      <Button
        type="button"
        onClick={userExistHandler}
        className="btn-base px-4 py-2"
        disabled={!isFormValid}
        title={buttonTitle}
      >
        Continue
      </Button>
    );
  }

  if (step === 1)
    return (
      <React.Fragment>
        <Button
          type="button"
          onClick={() => dispatch(backSetStep())}
          className="btn-inverted px-4 py-2"
        >
          Back
        </Button>

        <Button
          type="button"
          className="btn-base px-4 py-2"
          disabled={!isFormValid}
          title={buttonTitle}
          onClick={() => {
            dispatch(
              sendRequestForOTPVerification({
                username,
                otp,
              })
            );
          }}
        >
          Submit
        </Button>
      </React.Fragment>
    );

  if (step === 2) {
    return (
      <Button
        type="button"
        className="btn-base px-4 py-2"
        onClick={() => dispatch(nextSetStep())}
        disabled={!isFormValid}
        title={buttonTitle}
      >
        Continue
      </Button>
    );
  }

  return (
    <React.Fragment>
      <Button
        type="button"
        onClick={() => dispatch(backSetStep())}
        className="btn-inverted px-4 py-2"
      >
        Back
      </Button>
      <Button
        type="submit"
        className="btn-base px-4 py-2"
        disabled={!isFormValid}
      >
        Submit
      </Button>
    </React.Fragment>
  );
};

export default FormButtons;
