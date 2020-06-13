import React, { Component } from "react";

export default class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editText: this.props.item.text,
      isEditing: false,
    };
  }
  handleClick = e => {
    this.props.deleteItem(this.props.item.id);
  };

  handleStrike = e => {
    this.props.lineThrough(this.props.item.id);
  };

  handleEdit = e => {
    this.setState({ isEditing: true });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isEditing: false});
  };

  handleChange = e => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  render() {
    const strikeName = this.props.item.done ? "strike" : "";
    let output;
    if (this.state.isEditing) {
      output = (
        <div className="TodoComponent">
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.editText} onChange={this.handleChange} name="editText"/>
            <button type="submit"> 
              Save
            </button>
          </form>
        </div>
      );
    } else {
      output = (
        <div className="TodoComponent">
          <p onClick={this.handleStrike} className={strikeName}>
            {this.state.editText}
          </p>
          <div className="Buttons">
            <button onClick={this.handleEdit} className="Edit">
              E
            </button>
            <button onClick={this.handleClick} className="Delete">
              x
            </button>
          </div>
        </div>
      );
    }
    return output;
  }
}
