import React from "react";
import Task from "./Task";
import {v4 as uuidv4} from "uuid";

function TaskList({tasks, selectedCategory, onTaskDelete}) {

  const selectedTasks = tasks.filter(task => {
    if(selectedCategory==="All" || selectedCategory===undefined) {
      return true;
    }
    else {
      return selectedCategory===task.category;
    }
  });

  return (
    <div className="tasks">
      <ul>
        {selectedTasks.map(task => <Task key={uuidv4()} text={task.text} category={task.category} handleTaskDelete={()=>onTaskDelete(task)}></Task>)}
      </ul>
    </div>
  );
}

export default TaskList;
