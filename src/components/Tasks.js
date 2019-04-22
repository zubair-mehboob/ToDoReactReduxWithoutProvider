import React, { Component } from "react";
import {
  addTaskActionCreator,
  deleteTaskActionCreator,
  toggleTaskActionCreator
} from "../actions/task";
import List from "./List";
import { connect } from "react-redux";

class Tasks extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>TASKS</h1>
        <input type="text" id="txt_task" placeholder="type task.." />
        <button id="addToDo" onClick={this.props.addToDoTask}>
          Add Task
        </button>
        <List
          item={this.props.task}
          toggle={this.props.toggleTask}
          delete={this.props.deleteTask}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    task: state.task
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToDoTask: () => {
      let task = document.getElementById("txt_task").value;
      document.getElementById("txt_task").value = "";
      dispatch(addTaskActionCreator(task));
      //console.log(store.getState());
    },

    deleteTask: id => dispatch(deleteTaskActionCreator(id)),
    toggleTask: id => dispatch(toggleTaskActionCreator(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
