import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../store/actions/category.actions";
import ImageInput from "../Inputs/ImageInput.component";

function ImageSelect() {
  const category = useSelector((state) => state.signUp.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages(category));
  }, [dispatch, category]);

  return (
    <React.Fragment>
      <ImageInput isSignUp={true} />
    </React.Fragment>
  );
}

export default ImageSelect;
