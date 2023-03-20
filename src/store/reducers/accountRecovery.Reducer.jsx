import { createSlice } from "@reduxjs/toolkit";

const NO_OF_STEPS_IN_ACCOUNT_RECOVERY = 3;

const accountRecoveryInitialState = {
  username: "",
  category: "",
  otp: "",
  pass_image: "",
  step: 0,
  personalEmailOtp: "",
  professionalEmailOtp: "",
  phoneNumberOtp: "",
  isFormValid: false,
};

const accountRecoverySlice = createSlice({
  name: "accountRecovery",
  initialState: accountRecoveryInitialState,
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
    setPersonalEmailOtp(state, action) {
      state.personalEmailOtp = action.payload;
    },
    setProfessionalEmailOtp(state, action) {
      state.professionalEmailOtp = action.payload;
    },
    setPhoneNumberOtp(state, action) {
      state.phoneNumberOtp = action.payload;
    },
    setOtp(state, action) {
      state.otp = action.payload;
    },
    setPassImage(state, action) {
      state.pass_image = action.payload;
    },
    nextSetStep(state) {
      if (state.step === NO_OF_STEPS_IN_ACCOUNT_RECOVERY || !state.isFormValid)
        return;
      state.step++;
    },
    backSetStep(state) {
      if (state.step === 0) return;
      state.step--;
    },
    setAccountRecoveryInitialState(state) {
      state.username = accountRecoveryInitialState.username;
      state.otp = accountRecoveryInitialState.otp;
      state.category = accountRecoveryInitialState.category;
      state.pass_image = accountRecoveryInitialState.pass_image;
      state.isFormValid = accountRecoveryInitialState.isFormValid;
      state.step = accountRecoveryInitialState.step;
      state.professionalEmailOtp =
        accountRecoveryInitialState.professionalEmailOtp;
      state.personalEmailOtp = accountRecoveryInitialState.personalEmailOtp;
      state.phoneNumberOtp = accountRecoveryInitialState.phoneNumberOtp;
    },
  },
});

export const {
  setUsername,
  setIsFormValid,
  setCategory,
  setOtp,
  setPassImage,
  nextSetStep,
  backSetStep,
  setAccountRecoveryInitialState,
  setPersonalEmailOtp,
  setProfessionalEmailOtp,
  setPhoneNumberOtp,
} = accountRecoverySlice.actions;

export default accountRecoverySlice.reducer;
