import React, { Component } from "react";
import List from "./List";
import {
  addMovieActionCreator,
  deleteMovieActionCreator,
  toggleMovieActionCreator
} from "../actions/movie";
import generateId from "../actions";
class Movies extends Component {
  addToDoMovie = () => {
    console.log("heyyyyyyyyyyyy");

    let movie = document.getElementById("txt_movie").value;
    document.getElementById("txt_movie").value = "";
    this.props.dispatch(addMovieActionCreator(movie));
    console.log(this.props.movie);
  };

  deleteMovie = id => this.props.dispatch(deleteMovieActionCreator(id));
  toggleMovie = id => this.props.dispatch(toggleMovieActionCreator(id));

  render() {
    return (
      <div>
        <h1>Movies</h1>
        <input type="text" id="txt_movie" placeholder="type movie.." />
        <button id="addToDo" onClick={this.addToDoMovie}>
          Add Movie
        </button>
        <List
          item={this.props.movie}
          toggle={this.toggleMovie}
          delete={this.deleteMovie}
        />
      </div>
    );
  }
}

export default Movies;
