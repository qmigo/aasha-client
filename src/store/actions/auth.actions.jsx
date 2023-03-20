import axios from "axios";
import { toast } from "react-toastify";
import { logout } from "../reducers/auth.Reducer";

// const local = "http://localhost:4000/";
const remote = "https://sih-team-enkrypt.onrender.com/";

const URL_FOR_JWT_TOKEN_VERIFICATION = `${remote}authentication`;

export const jwtVerficationRequest = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL_FOR_JWT_TOKEN_VERIFICATION, {
        headers: {
          Authorization: token,
        },
      });

      const data = response.data;
      console.log(data);
      return true;
    } catch (error) {
      if (error.response.data) toast.error(error.response.data.message);
      else toast.error("Something went wrong!");
      dispatch(logout());
      return false;
    }
  };
};
