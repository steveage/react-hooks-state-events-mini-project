import React from "react";

function Task({handleTaskDelete, text, category}) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleTaskDelete(text)}>X</button>
    </div>
  );
}

export default Task;
