import React, { Component } from "react";
import List from "./List";
import {
  addMovieActionCreator,
  deleteMovieActionCreator,
  toggleMovieActionCreator
} from "../actions/movie";
import generateId from "../actions";
import movie_reducer from "../reducers/movies";
import { connect } from "react-redux";
class Movies extends Component {
  render() {
    return (
      <div>
        <h1>Movies</h1>
        <input type="text" id="txt_movie" placeholder="type movie.." />
        <button id="addToDo" onClick={this.props.addToDoMovie}>
          Add Movie
        </button>
        <List
          item={this.props.movie}
          toggle={this.props.toggleMovie}
          delete={this.props.deleteMovie}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToDoMovie: () => {
      console.log("heyyyyyyyyyyyy");

      const movie = document.getElementById("txt_movie").value;
      document.getElementById("txt_movie").value = "";
      dispatch(addMovieActionCreator(movie));
      //console.log(this.props.movie);
    },

    deleteMovie: id => dispatch(deleteMovieActionCreator(id)),
    toggleMovie: id => dispatch(toggleMovieActionCreator(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
