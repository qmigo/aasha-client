import React, { useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";
import Input from "../Inputs/Input.component";
import { useDispatch, useSelector } from "react-redux";
import { isUserExistHandler } from "../../store/actions/accoutRecovery.actions";
import {
  setIsFormValid,
  setOtp,
} from "../../store/reducers/accountRecovery.Reducer";

const OTPForRecovery = () => {
  const otp = useSelector((state) => state.accountRecovery.otp);
  const username = useSelector((state) => state.accountRecovery.username);
  const personalEmail = useSelector(
    (state) => state.accountRecovery.personalEmailOtp
  );
  const professionalEmail = useSelector(
    (state) => state.accountRecovery.professionalEmailOtp
  );
  const phoneNumber = useSelector(
    (state) => state.accountRecovery.phoneNumberOtp
  );

  const dispatch = useDispatch();
  const [isInputValid, setIsInputValid] = useState({
    otp: false,
  });

  const [counter, setCounter] = useState(120);

  useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setInterval(() => setCounter((counter) => counter - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    dispatch(setIsFormValid(isInputValid.otp));
  }, [isInputValid, dispatch]);

  const deb = useMemo(
    () =>
      debounce(() => {
        setCounter(120);
        dispatch(isUserExistHandler({ username }, true));
      }, 200),
    [username, dispatch]
  );

  const onResendHandler = () => {
    deb();
  };

  return (
    <div className="flex flex-col gap-4 mt-10">
      <div>
        <h3 className="text-sm text-gray-400 mb-1 ">
          One Time Password (OTP) has been sent to your registered email
          addresses &nbsp;
          <span className="text-[color:var(--color-primary)] inline-block text-xs">
            {personalEmail}
          </span>
          ,&nbsp;
          <span className="text-[color:var(--color-primary)] inline-block text-xs">
            {professionalEmail}
          </span>
          ,&nbsp;
          <span className="text-[color:var(--color-primary)] inline-block text-xs">
            {phoneNumber}
          </span>
        </h3>
      </div>

      <Input
        data={otp}
        setData={setOtp}
        type="number"
        inputFieldName="OTP"
        isInputValid={isInputValid}
        setIsInputValid={setIsInputValid}
      />

      <div className="flex gap-2 items-center justify-center mt-1">
        <h3 className="text-sm text-gray-400">Didn't recieve the OTP ?</h3>
        {counter === 0 && (
          <button
            type="button"
            className="text-sm font-semibold text-[color:var(--color-primary)] outline-none"
            onClick={onResendHandler}
          >
            RESEND OTP
          </button>
        )}
        {counter > 0 && (
          <span className="text-sm font-semibold text-[color:var(--color-primary)]">
            {counter} sec
          </span>
        )}
      </div>
      <h4 className="text-xs text-gray-400 text-center">
        <span className="text-[color:var(--color-primary)]">*</span>The OTP
        sequence is Professional - Personal - Phone
        <span className="text-[color:var(--color-primary)]">*</span>
      </h4>
    </div>
  );
};

export default OTPForRecovery;
