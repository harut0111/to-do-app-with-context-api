import React from "react";
import { useStateValue } from "../context";
import { removeTask, changeTaskStatus } from "../context/actions";

interface PropsType {
  text: string;
  id: string;
  done: boolean;
}
const ToDoItme: React.FC<PropsType> = ({
  text,
  id,
  done,
}: PropsType): JSX.Element => {
  const [, dispatch] = useStateValue();

  return (
    <div
      className={`todo-item ${done ? "done" : ""}`}
      onClick={() => dispatch(changeTaskStatus(id))}
    >
      <span className="todo-item-text">{text}</span>
      <button onClick={() => dispatch(removeTask(id))}>Remove</button>
    </div>
  );
};

export default ToDoItme;
