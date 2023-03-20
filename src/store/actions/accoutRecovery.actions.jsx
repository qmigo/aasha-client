import axios from "axios";
import { toast } from "react-toastify";
import {
  nextSetStep,
  setAccountRecoveryInitialState,
  setProfessionalEmailOtp,
  setPersonalEmailOtp,
  setPhoneNumberOtp,
} from "../reducers/accountRecovery.Reducer";

import { setCateogryInitialState } from "../reducers/category.Reducer";

import { setIsLoading } from "../reducers/ui.Reducer";

// const local = "http://localhost:4000/";
const remote = "https://sih-team-enkrypt.onrender.com/";

const URL_FOR_OTP_GENERATION = `${remote}otp/generate`;
const URL_FOR_OTP_VERIFICATION = `${remote}otp/verify`;
const URL_FOR_RESET_PASSWORD = `${remote}otp/resetpass`;

export const isUserExistHandler = (userInfo, isResend = false) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));

    try {
      const response = await axios.post(URL_FOR_OTP_GENERATION, userInfo);
      const data = response.data;
      console.log(data);
      const {
        personalEmail: personalEmailOtp,
        professionalEmail: professionalEmailOtp,
        phoneNumber: phoneNumberOtp,
      } = data;
      dispatch(setProfessionalEmailOtp(professionalEmailOtp));
      dispatch(setPersonalEmailOtp(personalEmailOtp));
      dispatch(setPhoneNumberOtp(phoneNumberOtp));
      if (!isResend) dispatch(nextSetStep());
      if (data.success === false) {
        toast.error(data.message);
      }
    } catch (error) {
      if (error.response.data) toast.error(error.response.data.message);
      else toast.error("Something went wrong!");
      console.log(error.response);
    }
    dispatch(setIsLoading(false));
  };
};

export const sendRequestForOTPVerification = (userInfo) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(URL_FOR_OTP_VERIFICATION, userInfo);
      const data = response.data;
      console.log(data);
      dispatch(nextSetStep());
    } catch (error) {
      if (error.response.data) toast.error(error.response.data.message);
      else toast.error("Something went wrong!");
      console.log(error.response);
    }
  };
};

export const passwordResetRequest = (userInfo) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(URL_FOR_RESET_PASSWORD, userInfo);
      const data = response.data;
      console.log(data);
      dispatch(setAccountRecoveryInitialState());
      dispatch(setCateogryInitialState());
      toast.success("Password reset successfully!");
      return true;
    } catch (error) {
      if (error.response.data) toast.error(error.response.data.message);
      else toast.error("Something went wrong!");
      console.log(error.response);
      return false;
    }
  };
};
