import React, { Component } from "react";
import {
  addTaskActionCreator,
  deleteTaskActionCreator,
  toggleTaskActionCreator
} from "../actions/task";
import List from "./List";

class Tasks extends Component {
  addToDoTask = () => {
    let task = document.getElementById("txt_task").value;
    document.getElementById("txt_task").value = "";
    this.props.dispatch(addTaskActionCreator(task));
    //console.log(store.getState());
  };

  deleteTask = id => this.props.dispatch(deleteTaskActionCreator(id));
  toggleTask = id => this.props.dispatch(toggleTaskActionCreator(id));

  render() {
    return (
      <div>
        <h1>TASKS</h1>
        <input type="text" id="txt_task" placeholder="type task.." />
        <button id="addToDo" onClick={this.addToDoTask}>
          Add Task
        </button>
        <List
          item={this.props.task}
          toggle={this.toggleTask}
          delete={this.deleteTask}
        />
      </div>
    );
  }
}

export default Tasks;
