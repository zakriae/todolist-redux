import {
  ADD_TODO,
  DELETE_TODO,
  DONE_TODO,
  FILTER_TODO,
  MAKE_ALL_COMPLETED,
  OPEN_TODO,
  TOGGLE_STATUS,
} from "./actionTypes";

const initialState = {
  todos: [],
  filter: "ALL",
  search: "",
};

const todoreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, completed: false }],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.text !== action.payload.text),
      };
    case DONE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: true } : todo
        ),
      };

    case OPEN_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: false } : todo
        ),
      };
    case TOGGLE_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: todo.completed }
            : todo
        ),
      };
    case FILTER_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo.completed === action.payload.status
        ),
        filter: action.payload.status ? "COMPLETED" : "NOT COMPLETED",
      };
    case MAKE_ALL_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
      };

    default:
      break;
  }
};

export default todoreducer;
