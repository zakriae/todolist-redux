import { createSlice } from "@reduxjs/toolkit";

const filtersReducer = createSlice({
  name: "filters",
  initialState: {
    filter: "ALL",
    searchTerm: "",
  },
  reducers: {
    filterTodos: (state, action) => {
      state.filter = action.payload;
    },
    filterSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export default filtersReducer.reducer;

export const { filterTodos, filterSearchTerm } = filtersReducer.actions;
