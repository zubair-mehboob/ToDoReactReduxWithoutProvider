import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "../actions/task";
export default function task_reducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.task];
    case DELETE_TASK:
      return state.filter(r => r.id !== action.id);
    case TOGGLE_TASK:
      return state.map(r => (r.id === action.id ? { ...r, done: !r.done } : r));
    default:
      return state;
  }
}
