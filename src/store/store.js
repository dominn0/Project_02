import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducer/themeReducer";
import movieReducer from "./reducer/detailReducer";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    movie: movieReducer,
  },
});

export default store;
