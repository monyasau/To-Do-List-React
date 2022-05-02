export default function Todo({delTask, time, taskValue,id}) {
    return (
        <>
        <div className="border border-secondary m-3 d-flex justify-content-between todo rounded p-2">
            {taskValue} 
             {time}
            <div>
            <button className="rounded ms-auto" id={id} onClick={delTask}>
                &times;
            </button>
            </div>
        </div>
        </>
    )
}