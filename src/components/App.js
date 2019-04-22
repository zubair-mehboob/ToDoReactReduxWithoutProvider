import React, { Component } from "react";
import Tasks from "./Tasks";
import Movies from "./Movies";

class App extends Component {
  // componentDidMount() {
  //   this.props.store.subscribe(() => this.forceUpdate());
  // }
  render() {
    //const { task, movie } = this.props.store.getState();
    return (
      <div className="App">
        <h1>ToDo App</h1>
        {/* <Tasks task={task} dispatch={this.props.store.dispatch} />
        <Movies movie={movie} dispatch={this.props.store.dispatch} /> */}
        <Tasks />
        <Movies />
      </div>
    );
  }
}

export default App;
