import { useState } from "react";
import FilterButtons from "./FilterButtons";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/todoReducer";
import TodoList from "./TodoList";

function Todo() {
  const dispach = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const handleAddclick = () => {
    if (newTodo.trim() !== "") {
      let id = 0;
      todos.forEach((todo) => {
        console.log(todo);
        if (todo.id > id) id = todo.id;
      });
      dispach(addTodo({ id: id + 1, text: newTodo }));
    }
  };

  return (
    <div className="w-3/5 bg-slate-200 flex flex-col justify-center rounded-md p-4 gap-5 shadow-md">
      <header className="w-full text-center text-2xl p-5">Personal App</header>
      <div className="flex flex-row gap-2 box-content h-10">
        <input
          type="text"
          name="new todo"
          placeholder="add your task"
          className="w-full shadow-sm p-3 rounded-md border border-slate-300"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="box-content" onClick={handleAddclick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4 bg-blue-800 h-full text-white min-w-10 rounded-md p-1 shadow-md"
          >
            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
          </svg>
        </button>
      </div>

      <div className="">
        <FilterButtons />

        <TodoList />
      </div>
    </div>
  );
}

export default Todo;
