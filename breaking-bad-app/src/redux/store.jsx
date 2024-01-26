import { configureStore } from "@reduxjs/toolkit";
// Slices
import charactersSlice from "./slices/charactersSlice";

const Store = configureStore({
  reducer: {
    characters: charactersSlice,
  },
});

export default Store;
