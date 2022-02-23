import React, { useContext } from "react"
import projectContext from "../../context/projects/projectContext"
import taskContext from "../../context/tasks/taskContext"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import Task from "./Task"

const TaskList = () => {
  const projectsContext = useContext(projectContext)
  const { project, deleteProject } = projectsContext
  const tasksContext = useContext(taskContext)
  const { tasksProject } = tasksContext

  if (!project) return <h2>Select a project!</h2>

  const [actualProject] = project

  const onClickDelete = () => {
    deleteProject(actualProject.id)
  }

  return (
    <>
      <h2>Project: {actualProject.name}</h2>

      <ul className='tasks-list'>
        {tasksProject.length === 0 ? (
          <li className='task'>
            <p>There are no tasks</p>
          </li>
        ) : (
          <TransitionGroup>
            {tasksProject.map((task) => (
              <CSSTransition key={task.id} timeout={200} classNames='task'>
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>

      <button type='button' className='btn btn-delete' onClick={onClickDelete}>
        Delete project &times;
      </button>
    </>
  )
}

export default TaskList
