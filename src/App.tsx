import React, { useState, FC, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { v1 } from "uuid";

import ToDoList from "./components/ToDoList";
import {TaskType} from "./components/ToDoList";

export type FilterValuesType = "all" | "completed" | "active";



function App() {
  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: v1(), name: "task1", isDone: true },
    { id: v1(), name: "task2", isDone: true },
    { id: v1(), name: "task3", isDone: false },
    { id: v1(), name: "task4", isDone: false }
  ]);




  function removeTask(id: string) {
    let resultTask = tasks.filter((task) => task.id !== id);
    
    setTasks(resultTask);
  }



function addTask(){
let newTask = {id:v1(),name:"newTask",isDone:false}
let newTasks = [newTask,...tasks]

}


    let [filter, setFilter] = useState<FilterValuesType>("active");
    function changeFilter(value: FilterValuesType) {
      setFilter(value)}
  
      let tasksForToDolist = tasks;
  
    if (filter === "completed") {
      tasksForToDolist = tasks.filter((task) => task.isDone === true);
    }
    if (filter === "active") {
      tasksForToDolist = tasks.filter((task) => task.isDone === false);
    }



  return (
    <div className="App">
      <ToDoList
        tasks={tasksForToDolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;
