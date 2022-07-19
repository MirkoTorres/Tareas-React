import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [newTodoPriority, setNewTodoPriority] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onChangeSelect = (event) => {
    setNewTodoPriority(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue, newTodoPriority === "" ? '10' : newTodoPriority);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva Tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Descripcion Tarea"
      />
      <select className="TodoPriority-select" onChange={onChangeSelect}>
        <option className="TodoPriority-option" value="10">
          Alta
        </option>
        <option className="TodoPriority-option" value="5">
          Media
        </option>
        <option className="TodoPriority-option" value="1">
          Baja
        </option>
      </select>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
