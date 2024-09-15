import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  let todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  todos = todos.filter((todo) => {
    const filter =
      (filters.filter === "COMPLETED" && todo.completed) ||
      (filters.filter === "NOT COMPLETED" && !todo.completed) ||
      (filters.filter === "ALL" && todo);
    const search = todo.text
      .toLowerCase()
      .includes(filters.searchTerm.toLowerCase());

    return filter && search;
  });
  return (
    <div>
      <p className=" text-sm italic mb-4">all your Notes Are Here</p>
      {todos &&
        todos.map((row, index) => (
          <TodoItem
            id={row.id}
            text={row.text}
            index={index}
            key={index}
            status={row.completed}
          />
        ))}
    </div>
  );
}

export default TodoList;
