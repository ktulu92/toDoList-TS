import { makeAutoObservable } from "mobx";
import { v1 } from "uuid";
import TaskStoreType  from "../types/types"


class TaskStore implements TaskStoreType {

    tasks = [
        { id: v1(), name: "task1", isDone: true },
        { id: v1(), name: "task2", isDone: true },
        { id: v1(), name: "task3", isDone: false },
        { id: v1(), name: "task4", isDone: false },
      ]

constructor(){
    makeAutoObservable(this)
}


addTask(name: string){
    let newTask = { id: v1(), name: name, isDone: false };
    this.tasks = [newTask, ...this.tasks];

}

 removeTask(id: string) {
   this.tasks = this.tasks.filter((task) => task.id !== id);

  }


}

export default new TaskStore;


