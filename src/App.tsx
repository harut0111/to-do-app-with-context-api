import React from "react";
import "./App.css";
import AddTask from "./components/AddTask";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <AddTask />
    </div>
  );
};

export default App;
