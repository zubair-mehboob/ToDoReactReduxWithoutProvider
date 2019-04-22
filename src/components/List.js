import React, { Component } from "react";
class List extends Component {
  state = {};
  render() {
    console.log(this.props);

    return (
      <ol>
        {this.props.item.map(rec => (
          <li key={rec.id}>
            <a
              href="#"
              onClick={() => this.props.toggle(rec.id)}
              style={{ textDecoration: rec.done ? "line-through" : "none" }}
            >
              {rec.name}
            </a>
            <button onClick={() => this.props.delete(rec.id)}>x</button>
          </li>
        ))}
      </ol>
    );
  }
}

export default List;
