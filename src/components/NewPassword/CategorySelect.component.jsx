import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setIsFormValid } from "../../store/reducers/accountRecovery.Reducer";
import CategoryInput from "../Inputs/CategoryInput.component";

const CategorySelect = () => {
  const category = useSelector((state) => state.accountRecovery.category);
  const dispatch = useDispatch();

  const [isInputValid, setIsInputValid] = useState({
    category: false,
  });

  useEffect(() => {
    dispatch(setIsFormValid(isInputValid.category));
  }, [isInputValid, dispatch]);
  return (
    <div className="mt-12">
      <CategoryInput
        setData={setCategory}
        data={category}
        setIsInputValid={setIsInputValid}
        isInputValid={isInputValid}
      />
    </div>
  );
};

export default CategorySelect;
