import axios from "axios";
import { toast } from "react-toastify";

import {
  nextSetStep,
  setAllImages,
  setCategoryLength,
  setImageList,
  setNoOfSteps,
} from "../reducers/logIn.Reducer";

import { setIsLoading } from "../reducers/ui.Reducer";
import { setCategory, setPassword } from "../reducers/logIn.Reducer";
import { fetchAllCategoryImages } from "../../firebase/firebase";
import { login, saveUserDataToStorage } from "../reducers/auth.Reducer";

// const local = "http://localhost:4000/";
const remote = "https://sih-team-enkrypt.onrender.com/";

const URL_FOR_USER_EXIST = `${remote}signin/check`;

const URL_FOR_USER_VERIFICATION = `${remote}signin`;

export const fetchAllImages = () => {
  return async (dispatch) => {
    try {
      const data = await fetchAllCategoryImages();
      if (data.length === 0) {
        throw new Error("Something went wrong!");
      }
      const categoryLen = [];
      const categoryUrls = [];
      for (let name of data) {
        categoryLen.push({
          category: name.category,
          length: name.url.length,
        });
      }
      for (let name of data) {
        categoryUrls[name.category.toLowerCase()] = name.url;
      }

      dispatch(setCategoryLength(categoryLen));
      dispatch(setAllImages(categoryUrls));
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
};

export const isUserExistHandler = (userInfo, allImages) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const response = await axios.post(URL_FOR_USER_EXIST, userInfo);
      const { pattern, category } = response.data;

      if (!allImages[category]) {
        throw new Error("Category diff not in firebase db");
      }

      const categoryImage = allImages[category];
      const imagesWithUrl = [];
      console.log(categoryImage, allImages);

      for (let i = 0; i < pattern.length; i++) {
        const rows = [];
        for (let j = 0; j < pattern[0].length; j++) {
          rows.push({
            id: pattern[i][j],
            url: categoryImage[pattern[i][j]],
          });
        }
        imagesWithUrl.push(rows);
      }

      dispatch(setCategory(category));
      dispatch(setImageList(imagesWithUrl));
      dispatch(setNoOfSteps(imagesWithUrl.length));
      dispatch(setPassword(Array(imagesWithUrl.length).fill(null)));
      dispatch(nextSetStep());
    } catch (error) {
      if (error.response.data) toast.error(error.response.data.message);
      else toast.error("Something went wrong!");
      console.log(error);
    }
    dispatch(setIsLoading(false));
  };
};

export const verifyUserLogin = (userInfo) => {
  return async (dispatch) => {
    console.log(userInfo);
    dispatch(setIsLoading(true));
    try {
      const response = await axios.post(URL_FOR_USER_VERIFICATION, userInfo);
      const data = response.data;
      console.log(data);
      const { token } = data;
      dispatch(setIsLoading(false));
      toast.success("Loged in successfully!");
      dispatch(login(token)); // auth token
      dispatch(
        saveUserDataToStorage({
          username: data.name,
          personalEmail: data.personalEmail,
          professionalEmail: data.professionalEmail,
          phoneNumber: data.phoneNumber,
        })
      );
      return true;
    } catch (error) {
      if (error.response.data) toast.error(error.response.data.message);
      else toast.error("Some error occurred while logging in!");
      dispatch(setIsLoading(false));
      console.log(error);
      return false;
    }
  };
};
