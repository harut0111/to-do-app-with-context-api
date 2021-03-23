import React, { useState, KeyboardEvent } from "react";
import { useStateValue } from "../context";
import { addNewTask } from "../context/actions";

const AddTask: React.FC = (): JSX.Element => {
  const [, dispatch] = useStateValue();
  const [inputVal, setInputVal] = useState("");

  const handleOnClick = () => {
    inputVal.trim() && dispatch(addNewTask(inputVal));
    setInputVal("");
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleOnClick();
  };

  return (
    <div className="add-task">
      <div className="head-text">Simple To-Do App with context API...</div>
      <input
        type="text"
        value={inputVal}
        placeholder="write to do text..."
        onChange={(e) => setInputVal(e.target.value)}
        onKeyDown={(e) => handleOnKeyDown(e)}
      />
      <button onClick={handleOnClick}>Add Task</button>
    </div>
  );
};

export default AddTask;
