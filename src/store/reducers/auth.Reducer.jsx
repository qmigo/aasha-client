import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const checkForLoggedIn = () => {
  if (localStorage.getItem("AUTH_TOKEN_ENKRYPT")) {
    return true;
  }
  return false;
};

const checkForAuthToken = () => {
  if (localStorage.getItem("AUTH_TOKEN_ENKRYPT"))
    return localStorage.getItem("AUTH_TOKEN_ENKRYPT");
  else return "";
};

const checkForUserData = (type) => {
  if (!localStorage.getItem(`ENKRYPT_${type}`)) return;
  return localStorage.getItem(`ENKRYPT_${type}`);
};

const authSliceInitialState = {
  isLoggedIn: checkForLoggedIn(),
  USERNAME: checkForUserData("USERNAME"),
  PROFESSIONAL_EMAIL: checkForUserData("PROFESSIONAL_EMAIL"),
  PERSONAL_EMAIL: checkForUserData("PERSONAL_EMAIL"),
  PHONE_NUMBER: checkForUserData("PHONE_NUMBER"),
  authToken: checkForAuthToken(),
  userUniqueId: uuidv4(),
};

const authSlice = createSlice({
  name: "auth",
  initialState: authSliceInitialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.authToken = action.payload;
      localStorage.setItem("AUTH_TOKEN_ENKRYPT", action.payload);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.authToken = "";
      localStorage.removeItem("AUTH_TOKEN_ENKRYPT");
    },
    saveUserDataToStorage(state, action) {
      localStorage.setItem(
        `ENKRYPT_PROFESSIONAL_EMAIL`,
        action.payload.professionalEmail
      );
      localStorage.setItem(
        `ENKRYPT_PERSONAL_EMAIL`,
        action.payload.personalEmail
      );
      localStorage.setItem(`ENKRYPT_PHONE_NUMBER`, action.payload.phoneNumber);
      localStorage.setItem("ENKRYPT_USERNAME", action.payload.username);
    },
    removeUserDataFromStorage(state) {
      if (localStorage.getItem("ENKRYPT_PROFESSIONAL_EMAIL"))
        localStorage.removeItem("ENKRYPT_PROFESSIONAL_EMAIL");

      if (localStorage.getItem("ENKRYPT_PERSONAL_EMAIL"))
        localStorage.removeItem("ENKRYPT_PERSONAL_EMAIL");

      if (localStorage.getItem("ENKRYPT_PHONE_NUMBER"))
        localStorage.removeItem("ENKRYPT_PHONE_NUMBER");

      if (localStorage.getItem("ENKRYPT_USERNAME"))
        localStorage.removeItem("ENKRYPT_USERNAME");
    },
  },
});

export const {
  login,
  logout,
  saveUserDataToStorage,
  removeUserDataFromStorage,
} = authSlice.actions;

export default authSlice.reducer;
