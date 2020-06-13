import React, { Component } from 'react'
import {v4 as uuid} from 'uuid';

export default class TodoForm extends Component {
    state = {
        text: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.text !== ""){
            this.props.addItem({...this.state, id: uuid(), done: false});
            this.setState({text: ""});
            e.target.reset();
        }
    }

    render() {
        return (
            <div>
                <form onChange={this.handleChange} onSubmit={this.handleSubmit} className="TodoForm">
                    <input type="text" name="text" autoComplete="off"/>
                    <button type="submit"> Add </button>
                </form>

            </div>
        )
    }
}
