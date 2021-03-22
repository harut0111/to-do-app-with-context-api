import React from "react";
import { useStateValue } from "../context";
import { ToDoItemsType } from "../context/reducer";
import ToDoItem from "./ToDoItem";

const ShowToDoItems: React.FC = (): JSX.Element => {
  const [state] = useStateValue();

  return (
    <div className="container">
      {state.todoItems.map((item: ToDoItemsType) => (
        <ToDoItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ShowToDoItems;
