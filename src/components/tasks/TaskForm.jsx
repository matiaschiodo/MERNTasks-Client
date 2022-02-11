import React from 'react';

const TaskForm = () => {
  return (
    <div className="form">
      <form>
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
      </form>
    </div>
  );
}

export default TaskForm;