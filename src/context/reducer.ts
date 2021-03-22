import { v4 as uuidv4 } from "uuid";
import { ADD_NEW_TASK, REMOVE_TASK } from "./actions";

export const initialState = {
  todoItems: [],
};

export interface ToDoItemsType {
  id: string;
  text: string;
  done: boolean;
}

export interface StateType {
  todoItems: ToDoItemsType[];
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
          { id: uuidv4(), text: action.payload, done: false },
          ...state.todoItems,
        ],
      };
    case REMOVE_TASK:
      return {
        ...state,
        todoItems: state.todoItems.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
