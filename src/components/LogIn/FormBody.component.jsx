import React from "react";
import { useSelector } from "react-redux";
import ImagesGridShow from "./ImagesGridShow.component";
import UsernameForLogin from "./UsernameForLogin.component";

const FormBody = () => {
  const step = useSelector((state) => state.logIn.step);

  if (step === 0) {
    //username
    return <UsernameForLogin />;
  }

  return <ImagesGridShow />;
};

export default FormBody;
