import React from 'react';
import Sidebar from '../layout/Sidebar'
import Navbar from '../layout/Navbar'
import TaskForm from '../tasks/TaskForm'
import TaskList from '../tasks/TaskList'

const Projects = () => {
  return (
    <div className="container-app">
      <aside>
        <Sidebar/>
      </aside>
      <div className="section-principal">
        <Navbar/>

        <main>
          <TaskForm/>

          <div className="container-tasks">
            <TaskList/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Projects;