import { ActionType } from "./reducer";

export const ADD_NEW_TASK = "ADD_NEW_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const CHANGE_TASK_STATUS = "CHANGE_TASK_STATUS";

export const addNewTask = (payload: string): ActionType => ({
  type: ADD_NEW_TASK,
  payload,
});

export const removeTask = (payload: string): ActionType => ({
  type: REMOVE_TASK,
  payload,
});

export const changeTaskStatus = (payload: string): ActionType => ({
  type: CHANGE_TASK_STATUS,
  payload,
});
