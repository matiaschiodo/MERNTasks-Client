import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext'
import Task from './Task'

const TaskList = () => {
  const projectsContext = useContext(projectContext)
  const { project, deleteProject } = projectsContext

  if(!project) return <h2>Select a project</h2>

  const [actualProject] = project

  const tasks = [
    {name: 'Elegir plataforma', status: false},
    {name: 'Elegir colores', status: true},
    {name: 'Elegir metodos de pago', status: false},
    {name: 'Elegir hosting', status: true},
  ]

  const onClickDelete = () => {
    deleteProject(actualProject.id)
  }

  return (
    <>
      <h2>Project: {actualProject.name}</h2>

      <ul className="tasks-list">
        {tasks.length === 0
          ? (<li className="task"><p>There are no tasks</p></li>)
          : tasks.map(task => (
            <Task
              task={task}
              key={task.name}
            />
          ))
        }
      </ul>

      <button
        type="button"
        className="btn btn-delete"
        onClick={onClickDelete}
      >
        Delete project &times;
      </button>
    </>
  );
}

export default TaskList;