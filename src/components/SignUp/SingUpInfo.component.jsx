import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setIsFormValid,
  setPersonalEmail,
  setPhoneNumber,
  setProfessionalEmail,
  setUsername,
} from "../../store/reducers/signUp.Reducer";
import CategoryInput from "../Inputs/CategoryInput.component";
import Input from "../Inputs/Input.component";

const SingUpInfo = () => {
  const username = useSelector((state) => state.signUp.username);
  const professionalEmail = useSelector(
    (state) => state.signUp.professionalEmail
  );
  const personalEmail = useSelector((state) => state.signUp.personalEmail);
  const phoneNumber = useSelector((state) => state.signUp.phoneNumber);
  const category = useSelector((state) => state.signUp.category);

  const dispatch = useDispatch();
  const [isInputValid, setIsInputValid] = useState({
    username: false,
    "professional email": false,
    "personal email": false,
    "phone number": false,
    category: false,
  });

  useEffect(() => {
    if (
      isInputValid.username &&
      isInputValid["professional email"] &&
      isInputValid["personal email"] &&
      isInputValid["phone number"] &&
      isInputValid.category
    ) {
      dispatch(setIsFormValid(true));
    } else {
      dispatch(setIsFormValid(false));
    }
  }, [isInputValid, dispatch]);

  return (
    <div className="flex flex-col gap-8 mt-10">
      <Input
        inputFieldName={"Username"}
        data={username}
        setData={setUsername}
        type="text"
        setIsInputValid={setIsInputValid}
        isInputValid={isInputValid}
      />

      <Input
        data={professionalEmail}
        setData={setProfessionalEmail}
        inputFieldName={"Professional Email"}
        type="email"
        setIsInputValid={setIsInputValid}
        isInputValid={isInputValid}
      />

      <Input
        data={personalEmail}
        setData={setPersonalEmail}
        inputFieldName={"Personal Email"}
        type="email"
        setIsInputValid={setIsInputValid}
        isInputValid={isInputValid}
      />

      <Input
        data={phoneNumber}
        setData={setPhoneNumber}
        inputFieldName={"Phone Number"}
        type="email"
        setIsInputValid={setIsInputValid}
        isInputValid={isInputValid}
      />

      <CategoryInput
        data={category}
        setData={setCategory}
        setIsInputValid={setIsInputValid}
        isInputValid={isInputValid}
      />
    </div>
  );
};

export default SingUpInfo;
