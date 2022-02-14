import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext'

const TaskForm = () => {
  const projectsContext = useContext(projectContext)
  const { project } = projectsContext

  return (
    <div className="form">
      <form>
        { !project
          ? (
            <>
              <div className="container-input">
                <input
                  type="text"
                  className="input-text"
                  placeholder="Task name"
                  disabled
                />
              </div>
              <div className="container-input">
                <input
                  type="button"
                  className="btn btn-primary btn-submit btn-block"
                  value="Add task"
                  disabled
                />
              </div>
            </>
          )
          : (
            <>
              <div className="container-input">
                <input
                  type="text"
                  className="input-text"
                  placeholder="Task name"
                  name="name"
                />
              </div>
              <div className="container-input">
                <input
                  type="submit"
                  className="btn btn-primary btn-submit btn-block"
                  value="Add task"
                />
              </div>
            </>
          )}
      </form>
    </div>
  );
}

export default TaskForm;