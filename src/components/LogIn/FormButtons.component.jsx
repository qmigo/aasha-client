import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserExistHandler } from "../../store/actions/logIn.actions";
import { backSetStep, nextSetStep } from "../../store/reducers/logIn.Reducer";
import Button from "../Button/Button.component";
import LoadingSpinner from "../UI/LoadingSpinner.component";

const FormButtons = () => {
  const step = useSelector((state) => state.logIn.step);
  const noOfSteps = useSelector((state) => state.logIn.noOfSteps);
  const allImages = useSelector((state) => state.logIn.allImages);
  const categoryLen = useSelector((state) => state.logIn.categoryLength);
  const isLoading = useSelector((state) => state.ui.isLoading);
  const userUniqueId = useSelector((state) => state.auth.userUniqueId);
  const isFormValid = useSelector((state) => state.logIn.isFormValid);
  const username = useSelector((state) => state.logIn.username);
  const dispatch = useDispatch();

  const buttonTitle = !isFormValid ? "Fill The Form Correctly!" : "";
  if (isLoading) {
    return <LoadingSpinner />;
  }

  const onClickNextHandler = () => {
    if (!isFormValid) return;
    dispatch(nextSetStep());
  };
  const onClickBackHandler = () => {
    dispatch(backSetStep());
  };
  const userExistHandler = () => {
    if (!isFormValid) return;
    const userInfo = {
      username,
      loginId: userUniqueId,
      categoriesLength: categoryLen,
    };
    dispatch(isUserExistHandler(userInfo, allImages));
  };

  if (step === 0) {
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

  if (step === noOfSteps)
    return (
      <React.Fragment>
        <Button
          type="button"
          onClick={onClickBackHandler}
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

  return (
    <div className="flex items-center justify-around w-full">
      <Button
        type="button"
        onClick={onClickBackHandler}
        className="btn-inverted px-4 py-2"
      >
        Back
      </Button>

      <Button
        type="button"
        className="btn-base px-4 py-2"
        disabled={!isFormValid}
        title={buttonTitle}
        onClick={onClickNextHandler}
      >
        Continue
      </Button>
    </div>
  );
};

export default FormButtons;
