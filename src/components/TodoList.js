import Todo from "./Todo";

export default function ListContainer({ taskDel, tasks}) {
  return (
    <>
      <div>
        {tasks.map((lists, i) => {
          return (
            <Todo
            delTask={taskDel}
              time={tasks[i].time}
              id={tasks[i].id}
              taskValue={tasks[i].taskValue}
            />
          );
        })}
      </div>
    </>
  );
}
