import { configureStore } from "@reduxjs/toolkit";
import accountRecoveryReducer from "./reducers/accountRecovery.Reducer";
import authReducer from "./reducers/auth.Reducer";
import categoryReducer from "./reducers/category.Reducer";
import contactUsReducer from "./reducers/contactUs.Reducer";
import logInReducer from "./reducers/logIn.Reducer";
import signUpReducer from "./reducers/signUp.Reducer";
import uiReducer from "./reducers/ui.Reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    signUp: signUpReducer,
    logIn: logInReducer,
    accountRecovery: accountRecoveryReducer,
    category: categoryReducer,
    ui:uiReducer,
    contactUs: contactUsReducer
  },
});

export default store;
