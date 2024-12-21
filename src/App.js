

import React, { Component } from "react";

export default class App extends Component {
  state = {
    todos: [],
  };
  inputRef = React.createRef();

  componentDidMount() {
    const local = JSON.parse(localStorage.getItem("todos"));
    if (local) {
      this.setState({ todos: local });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    this.inputRef.current.value = "";
  }

  handleSubmit = () => {
    const newTodo = this.inputRef.current.value;
    if (newTodo.trim() === "") return;

    this.setState((prev) => {
      return {
        todos: [
          ...prev.todos,
          {
            text: newTodo,
            date: new Date(),
            isCompleted: false,
            id: Date.now(),
          },
        ],
      };
    });
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  handleEdit = (id) => {
    const newText = prompt("Edit your todo:");
    if (newText) {
      this.setState((prevState) => ({
        todos: prevState.todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        ),
      }));
    }
  };

  handleComplete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-2 p-2 border border-4">
            <div className="d-flex justify-content-between">
              <input type="text" ref={this.inputRef} className="w-100" />
              <button onClick={this.handleSubmit}>Add Todo</button>
            </div>
            <div className="border border-2 mt-3">
              {this.state.todos.map((todo) => {
                return (
                  <div
                    key={todo.id}
                    className="d-flex justify-content-between align-items-center p-2"
                  >
                    <div>
                      <input
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={() => this.handleComplete(todo.id)}
                      />
                      <span
                        style={{
                          textDecoration: todo.isCompleted
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {todo.text}
                      </span>
                    </div>
                    <div>
                      <button onClick={() => this.handleEdit(todo.id)}>
                        Edit
                      </button>
                      <button onClick={() => this.handleDelete(todo.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// ----------------------------------------------------------------------------------------------------------------------------
