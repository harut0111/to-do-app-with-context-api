import React from "react";
import { useStateValue } from "../context";
import { ToDoItemsType } from "../context/reducer";
import ToDoItme from "./ToDoItme";

const ShowToDoItems: React.FC = (): JSX.Element => {
  const [state] = useStateValue();

  return (
    <div className="container">
      {state.todoItems.map((item: ToDoItemsType) => (
        <ToDoItme key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ShowToDoItems;
