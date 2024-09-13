import {
  ADD_TODO,
  ALL_TODO,
  DELETE_TODO,
  DONE_TODO,
  FILTER_TODO,
  MAKE_ALL_COMPLETED,
  OPEN_TODO,
  SEARCH_TODO,
  TOGGLE_STATUS,
  UPDATE_TODO,
} from "./actionTypes";

//Todo : I made a problem in the code the filter functionalities they are the same functionality is the filtering no need to separate them
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const updateTodo = (text, id) => ({
  type: UPDATE_TODO,
  payload: { text, id },
});

export const searchTodo = (text) => ({
  types: SEARCH_TODO,
  payload: { text },
});

export const allTodo = () => ({
  type: ALL_TODO,
});

export const markCompletedTodo = (id) => ({
  type: DONE_TODO,
  payload: { id },
});

export const markinCompleteTodo = (id) => ({
  type: OPEN_TODO,
  payload: { id },
});

export const toggleStatus = (id) => ({
  type: TOGGLE_STATUS,
  payload: { id },
});

export const makeAllCompleted = () => ({
  type: MAKE_ALL_COMPLETED,
});

export const removeTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const filterTodo = (status) => ({
  type: FILTER_TODO,
  payload: { status },
});
