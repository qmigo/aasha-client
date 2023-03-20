import { createSlice } from "@reduxjs/toolkit";

const categoryInitialState = {
  images: [],
  categoryList: [
    { category: "cat", id: 0 },
    { category: "dog", id: 1 },
    { category: "girraffe", id: 2 },
  ],
};

const categorySlice = createSlice({
  name: "category",
  initialState: categoryInitialState,
  reducers: {
    setImages(state, action) {
      state.images = action.payload;
    },
    setCategoryList(state, action) {
      state.categoryList = action.payload;
    },
    setCateogryInitialState(state) {
      state.images = categoryInitialState.images;
      state.categoryList = categoryInitialState.categoryList;
    },
  },
});

export const { setImages, setCategoryList, setCateogryInitialState } =
  categorySlice.actions;

export default categorySlice.reducer;
