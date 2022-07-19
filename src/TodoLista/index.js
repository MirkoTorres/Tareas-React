import React from "react";
import "./TodoLista.css";

function TodoList(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
