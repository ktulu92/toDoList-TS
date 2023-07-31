
import {FilterValuesType} from "../App"
import { useState } from "react";
export type TaskType = {
  id: string;
  name: string;
  isDone: boolean;
};

export type PropsType = {
  // name: string;
  tasks: Array<TaskType>;
  removeTask: (id: string) => void;
  changeFilter: (value:FilterValuesType)=>void;
  addTask: (title:string) => void;
};

function ToDoList(props: PropsType) {
 const [taskToAdd,setTasktoAdd] =useState("")


  return (
    <div>
      <input type="text" value = {taskToAdd} onChange={(e)=>{setTasktoAdd(e.currentTarget.value)}}/>
      <button onClick={()=>{props.addTask(taskToAdd)}}>Добавить задачу</button>
      <ul className="to-do-list">
        {props.tasks.map((t) => (
          <li key={t.id}>
            <span>{t.name}</span>
            <input type="checkbox"></input>
            <button onClick={() => props.removeTask(t.id)}>Удалить</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          props.changeFilter("all");
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          props.changeFilter("active");
        }}
      >
        Active
      </button>
      <button
        onClick={() => {
          props.changeFilter("completed");
        }}
      >
        Completed
      </button>
    </div>
  );
}
export default ToDoList;

