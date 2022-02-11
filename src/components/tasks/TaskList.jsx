import React from 'react';
import Task from './Task'

const TaskList = () => {

  const tasks = [
    {name: 'Elegir plataforma', status: false},
    {name: 'Elegir colores', status: true},
    {name: 'Elegir metodos de pago', status: false},
    {name: 'Elegir hosting', status: true},
  ]

  return (
    <>
      <h2>Project: Tienda Virtual</h2>

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
      >
        Delete project &times;
      </button>
    </>
  );
}

export default TaskList;