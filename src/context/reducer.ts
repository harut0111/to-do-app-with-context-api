import { v4 as uuidv4 } from "uuid";
import { ADD_NEW_TASK } from "./actions";

export const initialState = {
  todoItems: [],
};

export interface StateType {
  todoItems: { id: string; text: string; done: boolean }[];
}

export interface ActionType {
  type: string;
  payload: string;
}

export const reducer = (state: StateType, action: ActionType): StateType => {
  console.log(`action`, action);
  switch (action.type) {
    case ADD_NEW_TASK:
      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          { id: uuidv4(), text: action.payload, done: false },
        ],
      };

    default:
      return state;
  }
};
