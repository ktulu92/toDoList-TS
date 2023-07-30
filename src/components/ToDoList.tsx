
import {FilterValuesType} from "../App"
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
};

function ToDoList(props: PropsType) {
  return (
    <div>
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
