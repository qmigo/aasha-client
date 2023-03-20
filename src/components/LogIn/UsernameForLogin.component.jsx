import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsFormValid, setUsername } from "../../store/reducers/logIn.Reducer";
import Input from "../Inputs/Input.component";

const UsernameForLogin = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.logIn.username);
  const [isInputValid, setIsInputValid] = useState({
    username: false,
  });

  useEffect(() => {
    dispatch(setIsFormValid(isInputValid.username));
  }, [isInputValid, dispatch]);

  return (
    <div className="mt-12">
      <Input
        setData={setUsername}
        data={username}
        inputFieldName="Username"
        type="text"
        isInputValid={isInputValid}
        setIsInputValid={setIsInputValid}
      />
    </div>
  );
};

export default UsernameForLogin;
