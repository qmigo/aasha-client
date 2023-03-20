import { toast } from "react-toastify";
import {
  fetchCategoryName,
  fetchSpecificCategoryImage,
} from "../../firebase/firebase";
import { setCategoryList, setImages } from "../reducers/category.Reducer";
import { setIsLoading } from "../reducers/ui.Reducer";

export const fetchImages = (category) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const data = await fetchSpecificCategoryImage({ category: category });
      if (data.length === 0) {
        throw new Error("Something went wrong!");
      }
      let listData = [];
      for (let id in data) {
        listData.push({
          id: id,
          url: data[id],
        });
      }
      dispatch(setImages(listData));
    } catch (error) {
      toast.error(error);
    }
    dispatch(setIsLoading(false));
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const data = await fetchCategoryName();
      if (data.length === 0) {
        throw new Error("Something went wrong!");
      }
      dispatch(setCategoryList(data));
    } catch (error) {
      toast.error(error.message);
    }
  };
};
