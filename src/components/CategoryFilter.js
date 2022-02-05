import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectedCategory }) {

	const categoryButtons = categories.map((category) => {
		return (
			<button className={selectedCategory === category ? "selected" : ""} key={category} onClick={onSelectedCategory}>
				{category}
			</button>
		);
	});
	return (
		<div className="categories">
			<h5>Category filters</h5>
			{categoryButtons}
		</div>
	);
}

export default CategoryFilter;
