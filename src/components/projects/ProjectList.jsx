import React, { useContext, useEffect } from "react"
import projectContext from "../../context/projects/projectContext"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import Project from "./Project"

const ProjectList = () => {
  const projectsContext = useContext(projectContext)
  const { projects, getProjects, form } = projectsContext

  useEffect(() => {
    getProjects()
  }, [])

  if (projects.length === 0) return <p>Create your first project!</p>

  return (
    <>
      {!form ? (
        <ul className='projects-list'>
          <TransitionGroup>
            {projects.map((project) => (
              <CSSTransition
                key={project.id}
                timeout={200}
                classNames='project'
              >
                <Project project={project} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
      ) : (
        <ul className='projects-list projects-list-open'>
          <TransitionGroup>
            {projects.map((project) => (
              <CSSTransition
                key={project.id}
                timeout={200}
                classNames='project'
              >
                <Project project={project} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
      )}
    </>
  )
}

export default ProjectList
