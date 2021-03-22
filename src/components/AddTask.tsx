import React, { useState } from "react";
import { useStateValue } from "../context";
import { addNewTask } from "../context/actions";

const AddTask: React.FC = (): JSX.Element => {
  const [state, dispatch] = useStateValue();
  const [inputVal, setInputVal] = useState("");

  console.log(`state`, state)
  const handleOnClick = () => {
    dispatch(addNewTask(inputVal));
    setInputVal("");
  };

  return (
    <div className="add-task">
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleOnClick}>Add Task</button>
    </div>
  );
};

export default AddTask;
