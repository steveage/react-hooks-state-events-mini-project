import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [name, setName] = useState("");
  const [selectedCategory, setCategory] = useState("Code");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleTaskSubmit(event) {
    event.preventDefault();
    const task={
      text: name,
      category: selectedCategory
    };
    onTaskFormSubmit(task);
    setName("");
  }

  return (
    <form className="new-task-form" onSubmit={handleTaskSubmit}>
      <label>
        Details
        <input type="text" name="text" value={name} onChange={handleNameChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange} value={selectedCategory}>
          {categories.map(category => {
            if(category!=="All") {
              return <option key={uuidv4()} value={category}>{category}</option> 
            }
          } )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
