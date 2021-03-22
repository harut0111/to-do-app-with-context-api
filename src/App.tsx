import React from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import ShowToDoItems from "./components/ShowToDoItems";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <AddTask />
      <ShowToDoItems />
    </div>
  );
};

export default App;
