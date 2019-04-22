import generateId from "./index";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";

export function deleteTaskActionCreator(id) {
  console.log("del");

  return {
    type: DELETE_TASK,

    id
  };
}
export function toggleTaskActionCreator(id) {
  console.log("tog");

  return {
    type: TOGGLE_TASK,

    id
  };
}
export function addTaskActionCreator(name) {
  return {
    type: ADD_TASK,
    task: {
      id: generateId(),
      name,
      done: false
    }
  };
}
