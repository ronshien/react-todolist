import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends React.Component {
  state = {
    items: [{ id: 1, title: "wake up" }, { id: 2, title: "have breakfast" }],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    console.log("handle change");
  };
  handleSubmit = e => {
    console.log("handle submit");
  };
  clearList = () => {
    console.log("clear list");
  };
  handleEdit = id => {
    console.log("handle edit");
  };
  handleDelete = id => {
    console.log("handle delete");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
          </div>
          <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
          />
          <TodoList
            item={this.state.items}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            clearList={this.clearList}
          />
        </div>
      </div>
    );
  }
}

export default App;
