import React, { useState, useContext } from "react"
import projectContext from "../../context/projects/projectContext"

const NewProject = () => {
  const projectsContext = useContext(projectContext)
  const { form, showForm, addProject, showError, errorForm } = projectsContext

  const [project, setProject] = useState({
    name: "",
  })

  const { name } = project

  const onChangeProject = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmitProject = (e) => {
    e.preventDefault()
    if (name === "") {
      showError()
      return
    }
    addProject(project)
    setProject({
      name: "",
    })
  }

  return (
    <>
      <button
        type='button'
        className='btn btn-primary btn-block'
        onClick={() => showForm()}
      >
        New Project
      </button>

      {form ? (
        <form className='form-new-project' onSubmit={onSubmitProject}>
          <input
            type='text'
            className='input-text'
            placeholder='Project name'
            name='name'
            value={name}
            onChange={onChangeProject}
          />
          <input
            type='submit'
            className='btn btn-primary btn-block'
            value='Add project'
          />
        </form>
      ) : null}
      {errorForm ? (
        <p className='error message'>Project name is required.</p>
      ) : null}
    </>
  )
}

export default NewProject
