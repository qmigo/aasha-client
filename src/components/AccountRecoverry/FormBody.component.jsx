import React from "react";
import OTPForRecovery from "./OTPForRecovery.component";
import UsernameForRecovery from "../AccountRecoverry/UsernameForRecovery.component";
import CategorySelect from "../NewPassword/CategorySelect.component";
import ImageSelect from "../NewPassword/ImageSelect.component";
import { useSelector } from "react-redux";

const FormBody = () => {
  const step = useSelector((state) => state.accountRecovery.step);

  if (step === 0) {
    //username
    return <UsernameForRecovery />;
  }

  if (step === 1) {
    return <OTPForRecovery />;
  }

  if (step === 2) {
    return <CategorySelect />;
  }

  return <ImageSelect />;
};

export default FormBody;
