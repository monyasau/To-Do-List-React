import Todo from "./Todo";

export default function TodoList({ taskDel, tasks, taskCompleted}) {
  return (
    <>
        {tasks.map((todo, i) => {
          return (
            <Todo
            delTask={taskDel}
            key={i}
              time={tasks[i].time}
              id={tasks[i].id}
              taskValue={tasks[i].taskValue}
              checkTask={taskCompleted}
            />
          );
        })}
    </>
  );
}
