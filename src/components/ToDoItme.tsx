import React from "react";
import { useStateValue } from "../context";
import { removeTask } from "../context/actions";

interface PropsType {
  text: string;
  id: string;
}
const ToDoItme: React.FC<PropsType> = ({
  text,
  id,
}: PropsType): JSX.Element => {
  const [, dispatch] = useStateValue();
  return (
    <div className="todo-item">
      <span className="todo-item-text">{text}</span>
      <button onClick={() => dispatch(removeTask(id))}>Remove</button>
    </div>
  );
};

export default ToDoItme;
