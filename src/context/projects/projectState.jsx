import React, { useReducer } from "react"
import { v4 as uuidv4 } from "uuid"
import projectContext from "./projectContext"
import projectReducer from "./projectReducer"
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
} from "../../types"

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: "Tienda Virtual" },
    { id: 2, name: "Internet" },
    { id: 3, name: "Sitio web" },
  ]

  const initialState = {
    projects: [],
    form: false,
    errorForm: false,
    project: null,
  }

  const [state, dispatch] = useReducer(projectReducer, initialState)

  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    })
  }

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    })
  }

  const addProject = (project) => {
    project.id = uuidv4()
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    })
  }

  const showError = () => {
    dispatch({
      type: VALIDATE_FORM,
    })
  }

  const actualProject = (projectId) => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: projectId,
    })
  }

  const deleteProject = (projectId) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    })
  }

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorForm: state.errorForm,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        showError,
        actualProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState
