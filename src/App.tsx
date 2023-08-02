import React, { useState, FC, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { v1 } from "uuid";

import ToDoList from "./components/ToDoList";
import { TaskType} from "./types/types";


function App() {


  // let [filter, setFilter] = useState<FilterValuesType>("active");
  // function changeFilter(value: FilterValuesType) {
  //   setFilter(value);
  // }

  // let tasksForToDolist = tasks;

  // if (filter === "completed") {
  //   tasksForToDolist = tasks.filter((task) => task.isDone === true);
  // }
  // if (filter === "active") {
  //   tasksForToDolist = tasks.filter((task) => task.isDone === false);
  // }

  return (
    <div className="App">
      <ToDoList
        // tasks={tasksForToDolist}
        // removeTask={removeTask}
        // changeFilter={changeFilter}
        // addTask={addTask}
      />
    </div>
  );
}

export default App;

