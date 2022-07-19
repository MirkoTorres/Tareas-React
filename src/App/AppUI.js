import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoContador";
import { TodoSearch } from "../TodoBuscador";
import { TodoList } from "../TodoLista";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../TodoBoton";
import { Modal } from "../Modal";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {!loading && !searchedTodos.length && <p>¡Crea tu primer Tarea!</p>}

        {searchedTodos.sort(function(a, b){return b.priority - a.priority}).map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            priority={todo.priority === '10' ? 'Alta' : todo.priority === '5' ? 'Media' : 'Baja'}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export { AppUI };
