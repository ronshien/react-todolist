import React from "react";
import Item from "./TodoItem";

class TodoList extends React.Component {
  state = {};
  render() {
    return (
      <section>
        <div>Todo list</div>
        <Item />
      </section>
    );
  }
}

export default TodoList;
