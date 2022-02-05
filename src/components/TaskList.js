import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory, onDeleteTask }) {

	let eachTask;
	if (selectedCategory !== "All") {
		eachTask = tasks
			.filter((task) => task.category === selectedCategory)
			.map((task) => <Task key={task.text} task={task} />);
	} else {
		eachTask = tasks.map((task) => <Task key={task.text} text={task.text} task={task} onDeleteTask={onDeleteTask}/>);
	}

	return (<div className="tasks">{eachTask}</div>);
}

export default TaskList;
