import React, { useContext } from 'react';
import taskContext from '../../context/tasks/taskContext'

const Task = ({ task }) => {
  const tasksContext = useContext(taskContext)
  const { deleteTask, getTasks, changeStatus, saveActualTask } = tasksContext

  const handleDelete = id => {
    deleteTask(id)
    getTasks(task.projectId)
  }

  const changeStatusTask = task => {
    task.status
      ? task.status = false
      : task.status = true
    changeStatus(task)
    getTasks(task.projectId)
  }

  const saveTask = task => {
    saveActualTask(task)
    handleDelete(task.id)
  }

  return (
    <li className="task shadow">
      <p>{task.name}</p>

      <div className="status">
        {task.status
          ? (
            <button
              type="button"
              className="complete"
              onClick={() => changeStatusTask(task)}
            >
              Complete
            </button>
          )
          : (
            <button
              type="button"
              className="incomplete"
              onClick={() => changeStatusTask(task)}
            >
              Incomplete
            </button>
          )
        }
      </div>

      <div className="actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => saveTask(task)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Task;