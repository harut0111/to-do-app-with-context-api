import React, { useState, KeyboardEvent } from "react";
import { useStateValue } from "../context";
import { addNewTask } from "../context/actions";

const AddTask: React.FC = (): JSX.Element => {
  const [, dispatch] = useStateValue();
  const [inputVal, setInputVal] = useState("");

  const handleOnClick = () => {
    dispatch(addNewTask(inputVal));
    setInputVal("");
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") handleOnClick();
  };

  return (
    <div className="add-task">
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onKeyDown={(e) => handleOnKeyDown(e)}
      />
      <button onClick={handleOnClick}>Add Task</button>
    </div>
  );
};

export default AddTask;
