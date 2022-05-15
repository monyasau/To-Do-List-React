export default function Todo({ delTask, time, taskValue, id, checkTask }) {
  return (
    <>
      <div className="border border-secondary m-3 d-flex flex-wrap align-items-center justify-content-between todo rounded p-2" id={id}>
        <div className="todo-value"  onClick={checkTask}>{taskValue}</div>
        <div>
          <button className="rounded ms-auto" id={id} onClick={delTask}>
            &times;
          </button>
        </div>
        <div className="task-time w-100">Created on: {time} </div>
      </div>
    </>
  );
}
