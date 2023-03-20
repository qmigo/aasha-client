import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormBody from "../components/SignUp/FormBody.component";
import FormButtons from "../components/SignUp/FormButtons.component";

const NewPassword = ({ notification }) => {
  const [step, setStep] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    pass_image: "",
  });

  const navigate = useNavigate();

  const togglePageHandler = async () => {
    if (!isFormValid && !step) {
      return;
    }
    setStep((step) => !step);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("http://localhost:4000/signup/passchange", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });
      const { isChange, message } = await response.json();
      if (isChange) {
        notification("success", message);
        navigate("/login");
      } else {
        notification("warn", message);
      }
    } catch (error) {
      notification("error", "Something went wrong!");
    }
  };

  return (
    <div className="mt-32 mx-auto md:mt-36 bg-white shadow-[2px_4px_12px_rgba(0,0,0,0.2)] max-w-[480px] md:mx-auto shadow-gray-400 rounded-xl p-8">
      <form action="" className="w-4/5 mx-auto" onSubmit={onSubmitHandler}>
        <div className="header flex flex-col items-center justify-center">
          <h1 className="text-[color:var(--color-primary)] text-3xl font-semibold mb-2 text-center">
            New Password
          </h1>
          <div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>
        </div>

        <div className="body">
          <FormBody
            formData={formData}
            setFormData={setFormData}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            step={step}
            setIsFormValid={setIsFormValid}
          />
        </div>

        <div className="footer mt-8 flex justify-around">
          <FormButtons
            isLoading={isLoading}
            step={step}
            togglePageHandler={togglePageHandler}
            isFormValid={isFormValid}
          />
        </div>
      </form>
    </div>
  );
};

export default NewPassword;
