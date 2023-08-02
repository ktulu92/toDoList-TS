export type TaskType = {
    id: string;
    name: string;
    isDone: boolean;
  };
  

  export type FilterValuesType = "all" | "completed" | "active";

//   export type PropsType = {
//     // name: string;
//     tasks: Array<TaskType>;
//     removeTask: (id: string) => void;
//     changeFilter: (value:FilterValuesType)=>void;
//     addTask: (title:string) => void;
//   };
  


  export default interface TaskStoreType {
    // name: string;
    tasks: Array<TaskType>;
    removeTask: (id: string) => void;
    // changeFilter: (value:FilterValuesType)=>void;
    addTask: (title:string) => void;
  };
  

  