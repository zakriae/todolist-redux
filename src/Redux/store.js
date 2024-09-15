import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";
import filtersReducer from "./filtersReducer";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    filters: filtersReducer,
  },
});

export default store;
