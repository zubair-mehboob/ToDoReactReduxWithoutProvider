import generateId from "./index";
export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const TOGGLE_MOVIE = "TOGGLE_MOVIE";

export function deleteMovieActionCreator(id) {
  return {
    type: DELETE_MOVIE,

    id
  };
}
export function toggleMovieActionCreator(id) {
  return {
    type: TOGGLE_MOVIE,

    id
  };
}
export function addMovieActionCreator(name) {
  console.log("I am in");

  return {
    type: ADD_MOVIE,
    movie: {
      id: generateId(),
      name,
      done: false
    }
  };
}
