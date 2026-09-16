
function TaskItem({task}) {
  return (
    <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>
            Status: {task.completed ? "Completed" : "Pending"}
        </p>
    </div>
  )
}

export default TaskItem