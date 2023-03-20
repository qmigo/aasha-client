import React from "react";
import { useSelector } from "react-redux";
import ImageSelect from "./ImageSelect.component";
import SingUpInfo from "./SingUpInfo.component";

const FormBody = () => {
  const step = useSelector((state) => state.signUp.step);
  if (step === 0) {
    return <SingUpInfo />;
  }
  return <ImageSelect />;
};

export default FormBody;
