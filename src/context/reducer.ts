import { v4 as uuidv4 } from "uuid";
import { ADD_NEW_TASK, REMOVE_TASK, CHANGE_TASK_STATUS } from "./actions";

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
    case CHANGE_TASK_STATUS:
      return {
        ...state,
        todoItems: state.todoItems.map((item) =>
          item.id === action.payload ? { ...item, done: !item.done } : item
        ),
      };

    default:
      return state;
  }
};
