export default function Todo({delTask, time, taskValue,id}) {
    return (
        <>
        <div className="border border-secondary">
             {time}
            {taskValue} 
            {id}
            <button className="rounded ms-5" id={id} onClick={delTask}>
                &times;
            </button>
        </div>
        </>
    )
}