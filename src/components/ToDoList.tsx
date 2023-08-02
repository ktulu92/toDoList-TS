
// import {PropsType} from '../types/types'
import { useState } from "react";
import TaskStore from "../stores/TaskStore"
import {observer} from "mobx-react-lite"



const ToDoList= observer(()=> {


//  const [taskToAdd,setTasktoAdd] =useState("")


  return (
    <div>     
      {/* <input type="text" value = {taskToAdd} onChange={(e)=>{setTasktoAdd(e.currentTarget.value)}}/> */}
      <button 
      // onClick={()=>
      //   {TaskStore.addTask()}}
        >Добавить задачу</button>
      <ul className="to-do-list">
        {TaskStore.tasks.map((t) => (
          <li key={t.id}>
            <span>{t.name}</span>
            <input type="checkbox"></input>
            <button onClick={() => TaskStore.removeTask(t.id)}>Удалить</button>
        
          </li>
        ))}
      </ul>
      {/* <button
        onClick={() => {
          TaskStore.changeFilter("all");
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
      </button> */}
    </div>
  );
})
export default ToDoList;

