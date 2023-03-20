import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../store/actions/category.actions";
import ImageInput from "../Inputs/ImageInput.component";
import LoadingSpinner from "../UI/LoadingSpinner.component";

function ImageSelect() {
  const isLoading = useSelector((state) => state.ui.isLoading);
  const category = useSelector((state) => state.accountRecovery.category);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchImages(category));
  }, [dispatch,category]);

  return (
    <React.Fragment>
      {isLoading && <LoadingSpinner containerClass="mt-16 mb-14" />}
      {!isLoading && <ImageInput isSignUp={false} />}
    </React.Fragment>
  );
}

export default ImageSelect;
