import React, { useReducer } from "react"
import taskContext from "./taskContext"
import taskReducer from "./taskReducer"
import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATUS_TASK,
  ACTUAL_TASK,
} from "../../types/index"

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 0, name: "Elegir plataforma", status: false, projectId: 1 },
      { id: 1, name: "Elegir colores", status: true, projectId: 2 },
      { id: 2, name: "Elegir metodos de pago", status: false, projectId: 3 },
      { id: 3, name: "Elegir hosting", status: true, projectId: 4 },
      { id: 4, name: "Elegir plataforma", status: false, projectId: 4 },
      { id: 5, name: "Elegir colores", status: true, projectId: 1 },
      { id: 6, name: "Elegir metodos de pago", status: false, projectId: 2 },
      { id: 7, name: "Elegir plataforma", status: false, projectId: 3 },
      { id: 8, name: "Elegir colores", status: true, projectId: 4 },
      { id: 9, name: "Elegir metodos de pago", status: false, projectId: 3 },
    ],
    tasksProject: null,
    errorTask: false,
    selectedTask: null,
  }

  const [state, dispatch] = useReducer(taskReducer, initialState)

  const getTasks = (projectId) => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId,
    })
  }

  const addTask = (task) => {
    dispatch({
      type: ADD_TASK,
      payload: task,
    })
  }

  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    })
  }

  const deleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: id,
    })
  }

  const changeStatus = (task) => {
    dispatch({
      type: STATUS_TASK,
      payload: task,
    })
  }

  const saveActualTask = (task) => {
    dispatch({
      type: ACTUAL_TASK,
      payload: task,
    })
  }

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        tasksProject: state.tasksProject,
        errorTask: state.errorTask,
        selectedTask: state.selectedTask,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        changeStatus,
        saveActualTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  )
}

export default TaskState
