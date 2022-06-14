import React from "react";
import {v4 as uuidv4} from "uuid";

function CategoryFilter({categories, selectedCategory, handleCategorySelect}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {getCategoryButtons()}
    </div>
  );

  function getCategoryButtons() {
    function getSelectedClassName(category) {
      return category===selectedCategory? "selected" : "";
    }

    return categories.map(category => <button key={uuidv4()} onClick={handleCategorySelect} className={getSelectedClassName(category)}>{category}</button>)
  }
}

export default CategoryFilter;
