import React, { Component } from "react";
import TodoCompontnent from "./TodoComponent";
import TodoForm from "./TodoForm";
import "./TodoList.css";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  addItem = item => {
    this.setState(st => ({
      items: [...st.items, item],
    }));
  };

  deleteItem = itemID => {
    const newList = this.state.items.filter(item => item.id !== itemID);
    this.setState({ items: newList });
  };

  lineThrough = id => {
    const newList = this.state.items.map(item => {
      if (item.id === id) item.done = !item.done;
      return item;
    });
    this.setState({ items: newList });
  };

  render() {
    const list = this.state.items.map(item => (
      <li key={item.id}>
        <TodoCompontnent
          item={item}
          deleteItem={this.deleteItem}
          lineThrough={this.lineThrough}
        />
      </li>
    ));
    return (
      <div className="TodoList">
        <TodoForm addItem={this.addItem} />
        <ul>{list}</ul>
      </div>
    );
  }
}
