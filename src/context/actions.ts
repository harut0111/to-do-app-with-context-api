import { ActionType } from "./reducer";

export const ADD_NEW_TASK = "ADD_NEW_TASK";

export const addNewTask = (payload: string): ActionType => ({
  type: ADD_NEW_TASK,
  payload,
});
