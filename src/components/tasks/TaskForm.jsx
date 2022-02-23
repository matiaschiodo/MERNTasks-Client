import React, { useContext, useState, useEffect } from "react"
import projectContext from "../../context/projects/projectContext"
import taskContext from "../../context/tasks/taskContext"
import { v4 as uuidv4 } from "uuid"

const TaskForm = () => {
  const projectsContext = useContext(projectContext)
  const { project } = projectsContext
  const tasksContext = useContext(taskContext)
  const {
    addTask,
    validateTask,
    errorTask,
    getTasks,
    selectedTask,
    saveActualTask,
  } = tasksContext

  useEffect(() => {
    if (selectedTask !== null) {
      setTask(selectedTask)
    } else {
      setTask({
        name: "",
      })
    }
  }, [selectedTask])

  const [task, setTask] = useState({
    name: "",
  })

  const { name } = task

  if (!project) return null
  const [actualProject] = project

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (name.trim() === "") {
      validateTask()
      return
    }
    const newTask = {
      name: name,
      projectId: actualProject.id,
    }
    if (selectedTask === null) {
      newTask.id = uuidv4()
      newTask.status = false
    } else {
      newTask.id = selectedTask.id
      newTask.status = selectedTask.status
    }
    addTask(newTask)
    getTasks(actualProject.id)
    saveActualTask(null)
    setTask({
      name: "",
    })
  }

  return (
    <div className='form'>
      <form onSubmit={onSubmit}>
        <div className='container-input'>
          <input
            type='text'
            className='input-text'
            placeholder='Task name'
            name='name'
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className='container-input'>
          <input
            type='submit'
            className='btn btn-primary btn-submit btn-block'
            value={selectedTask ? "Edit task" : "Add task"}
          />
        </div>
      </form>
      {errorTask ? (
        <p className='message error'>Task name is required</p>
      ) : null}
    </div>
  )
}

export default TaskForm
