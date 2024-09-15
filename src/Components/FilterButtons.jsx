import { useState } from "react";
import { useDispatch } from "react-redux";
import { markAllCompleted } from "../Redux/todoReducer";
import { filterSearchTerm, filterTodos } from "../Redux/filtersReducer";

function FilterButtons() {
  const [search, setSearch] = useState("");
  const handleSearchTerm = () => {
    dispach(filterSearchTerm(search));
  };

  const dispach = useDispatch();
  const handleChange = (filter) => {
    dispach(filterTodos(filter));
  };

  const handleMarkedComplete = () => {
    dispach(markAllCompleted());
  };
  return (
    <div className="flex flex-row mb-4">
      <select
        className=" text-sm rounded-md shadow-sm"
        onChange={(e) => handleChange(e.target.value)}
      >
        <option>ALL</option>
        <option>COMPLETED</option>
        <option>NOT COMPLETED</option>
      </select>

      <button
        onClick={handleMarkedComplete}
        className="ml-4 bg-blue-800 p-2 text-cyan-50 text-sm rounded-md shadow-md hover:pointer-events-auto"
      >
        Mark All Completed
      </button>
      <div className=" ml-auto h-10 flex">
        <input
          className="h-full rounded-md shadow-sm p-2 mr-2 border border-slate-300"
          type="text"
          placeholder="search todo"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => handleSearchTerm()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 bg-blue-800 h-full text-white min-w-10 rounded-md p-2 shadow-sm"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default FilterButtons;
