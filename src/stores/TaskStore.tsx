import { makeAutoObservable } from "mobx";
import { v1 } from "uuid";
import TaskStoreType from "../types/types";

import { FilterValuesType } from "../types/enum";

class TaskStore implements TaskStoreType {
  tasks = [
    { id: v1(), name: "task1", isDone: true },
    { id: v1(), name: "task2", isDone: true },
    { id: v1(), name: "task3", isDone: false },
    { id: v1(), name: "task4", isDone: false },
  ];

  filter = "active";

  constructor() {
    makeAutoObservable(this);
  }

  addTask(name: string) {
    let newTask = { id: v1(), name: name, isDone: false };
    this.tasks = [newTask, ...this.tasks];
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  changeFilter(filter: string) {
    if (filter === FilterValuesType.completed) {
      this.tasks = this.tasks.filter((task) => task.isDone === true);
    }
    if (filter === FilterValuesType.active) {
      this.tasks = this.tasks.filter((task) => task.isDone === false);
    }
  }
}

export default new TaskStore();
