import { ADD_MOVIE, DELETE_MOVIE, TOGGLE_MOVIE } from "../actions/movie";
export default function movie_reducer(state = [], action) {
  switch (action.type) {
    case ADD_MOVIE:
      return [...state, action.movie];
    case DELETE_MOVIE:
      return state.filter(r => r.id !== action.id);
    case TOGGLE_MOVIE:
      return state.map(r => (r.id === action.id ? { ...r, done: !r.done } : r));
    default:
      return state;
  }
}
