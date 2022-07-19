import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoBuscador.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Buscador de Tarea"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
