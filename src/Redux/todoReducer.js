import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    },
    markDone: (state, action) => {
      state.map((todo) =>
        todo.id == action.payload ? (todo.completed = true) : todo
      );
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    markAllCompleted: (state) => {
      state.map((todo) => (todo.completed = true));
    },
  },
});

export const { markAllCompleted, deleteTodo, markDone, addTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
