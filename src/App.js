import React, { Component } from 'react';
import TodoList from './TodoList';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <h1> Todo List </h1>
                <TodoList />
            </div>
        )
    }
}
