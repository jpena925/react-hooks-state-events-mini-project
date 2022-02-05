import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
      text: "",
      category: ""
  })

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleNewSubmit(event){
    event.preventDefault()
    onTaskFormSubmit({
      text: formData.text,
      category: formData.category
    })
  }

  let categoryOpt = [...categories].slice(1,categories.length).map((category) => <option key={category}>{category}</option>)

  return (
    <form className="new-task-form" onSubmit={handleNewSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={formData.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={formData.category}>
          <option>Select</option>
          {categoryOpt}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
