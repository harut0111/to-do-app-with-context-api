import React from "react";
import { FaTrash } from "react-icons/fa";
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
      className={`container-item ${done ? "done" : ""}`}
      onClick={() => dispatch(changeTaskStatus(id))}
    >
      <span className="container-item-text">{text}</span>
      <span
        className="container-item-trash"
        onClick={() => dispatch(removeTask(id))}
      >
        <FaTrash color="red" />
      </span>
    </div>
  );
};

export default ToDoItme;
