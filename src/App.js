import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends React.Component {
  state = {
    items: [{ id: 1, title: "wake up" }, { id: 2, title: "have breakfast" }],
    id: 0,
    item: "",
    editItem: false
  };

  handleChange = e => {
    this.setState({ item: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id === 0 ? uuid() : this.state.id,
      title: this.state.item
    };
    let items = [];
    if (this.state.id === 0) {
      items = [...this.state.items, newItem];
    } else {
      items = this.state.items.map(item => {
        if (item.id === this.state.id) {
          item.title = this.state.item;
        }
        return item;
      });
    }

    this.setState({
      items: items,
      item: "",
      id: 0,
      editItem: false
    });
  };
  clearList = () => {
    this.setState({ items: [] });
  };
  handleEdit = id => {
    //const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id == id);
    this.setState({
      // items: filteredItems,
      item: selectedItem.title,
      id: id
    });
  };
  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: filteredItems });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              clearList={this.clearList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
