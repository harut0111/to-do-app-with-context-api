import React from "react";
import "./App.scss";
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
