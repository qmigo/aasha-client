import { createSlice } from "@reduxjs/toolkit";

const logInSliceInitialState = {
  username: "",
  password: [],
  category: "",
  isFormValid: false,
  imageList: [],
  step: 0,
  noOfSteps: 0,
  allImages: {},
  categoryLength: [],
};

const logInSlice = createSlice({
  name: "logIn",
  initialState: logInSliceInitialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setIsFormValid(state, action) {
      state.isFormValid = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setImageList(state, action) {
      state.imageList = action.payload;
    },
    setNoOfSteps(state, action) {
      state.noOfSteps = action.payload;
    },
    setAllImages(state, action) {
      state.allImages = action.payload;
    },
    nextSetStep(state) {
      if (state.step === state.noOfSteps|| !state.isFormValid) return;
      state.step++;
    },
    backSetStep(state) {
      if (state.step === 0) return;
      state.step--;
    },
    setCategoryLength(state, action) {
      state.categoryLength = action.payload;
    },
    setStep(state, action) {
      if (action.payload < 0 || action.payload > state.noOfSteps) return;
      state.step = action.payload;
    },
    setLogInInitialState(state) {
      state.username = logInSliceInitialState.username;
      state.category= logInSliceInitialState.category;
      state.isFormValid=logInSliceInitialState.isFormValid;
      state.password=logInSliceInitialState.password;
      state.noOfSteps = logInSliceInitialState.noOfSteps;
      state.imageList = logInSliceInitialState.imageList;
      state.allImages = logInSliceInitialState.allImages;
      state.step = logInSliceInitialState.step;
      state.categoryLength = logInSliceInitialState.categoryLength;
    },
  },
});

export const {
  setUsername,
  setCategory,
  setIsFormValid,
  setPassword,
  setImageList,
  setNoOfSteps,
  setAllImages,
  nextSetStep,
  backSetStep,
  setStep,
  setCategoryLength,
  setLogInInitialState,
} = logInSlice.actions;

export default logInSlice.reducer;
