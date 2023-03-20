import axios from "axios";
import { toast } from "react-toastify";
import { nextSetStep } from "../reducers/signUp.Reducer";
import { setIsLoading } from "../reducers/ui.Reducer";

// const local = "http://localhost:4000/";
const remote = "https://sih-team-enkrypt.onrender.com/";

let URL_FOR_USER_CHECK = `${remote}signup/check`;
let URL_FOR_USER_REGISTRATION = `${remote}signup`;

export const isUserExistHandler = (userInfo) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const response = await axios.post(URL_FOR_USER_CHECK, userInfo);
      const data = response.data;
      const { message, isExist } = data;
      console.log(isExist, message);
      dispatch(nextSetStep());
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data) toast.warn(error.response.data.message);
      else toast.error("Something went wrong. Please try again later.");
    }
    dispatch(setIsLoading(false));
  };
};

export const userRegistration = (userInfo) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const response = await axios.post(URL_FOR_USER_REGISTRATION, userInfo);
      const { message } = response.data;
      toast.success(message);
      dispatch(setIsLoading(false));
      return true;
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data) toast.warn(error.response.data.message);
      else toast.error("Some error occured while signing up!");
      dispatch(setIsLoading(false));
      return false;
    }
  };
};
