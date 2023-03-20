import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormBody from "../components/AccountRecoverry/FormBody.component";
import FormButtons from "../components/AccountRecoverry/FormButtons.component";

import { passwordResetRequest } from "../store/actions/accoutRecovery.actions";
import { setAccountRecoveryInitialState } from "../store/reducers/accountRecovery.Reducer";

const AccountRecovery = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.accountRecovery.username);
  const category = useSelector((state) => state.accountRecovery.category);
  const pass_image = useSelector((state) => state.accountRecovery.pass_image);
  const isFormValid = useSelector((state) => state.accountRecovery.isFormValid);
  const step = useSelector((state) => state.accountRecovery.step);
  const otp = useSelector((state) => state.accountRecovery.otp);
  const navigate = useNavigate();

  const heading = step < 2 ? "Account Recovery" : "New Password";

  useEffect(() => {
    return () => {
      dispatch(setAccountRecoveryInitialState());
    };
  }, [dispatch]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (otp.length === 0) return;
    if (!isFormValid) return;

    const userInfo = {
      username,
      category,
      pass_image: pass_image.id,
      otp,
    };
    console.log(userInfo);
    const isSuccess = await dispatch(passwordResetRequest(userInfo));
    if (isSuccess) {
      navigate("/login");
    }
  };

  return (
    <div className="mt-28 sm:mt-32 mx-auto md:mt-36 bg-[color:var(--main-color)] shadow-[2px_4px_12px_rgba(0,0,0,0.2)] max-w-[480px] md:mx-auto shadow-[color:var(--shadow-color)] rounded-xl p-8">
      <form action="" className="w-4/5 mx-auto" onSubmit={onSubmitHandler}>
        <div className="header flex flex-col items-center justify-center">
          <h1 className="text-[color:var(--color-primary)] text-3xl font-semibold mb-2 text-center">
            {heading}
          </h1>
          <div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>
        </div>

        <div className="body">
          <FormBody />
        </div>

        <div className="footer mt-8 flex justify-around">
          <FormButtons />
        </div>
      </form>
    </div>
  );
};

export default AccountRecovery;
