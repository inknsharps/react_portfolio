import React from "react";
import Circle from "../Circle/Circle";
import "./ShapesContainer.css";

const ShapesContainer = () => {
	return (
		<div className="ShapesContainer fixed inset-0 z-0 grid grid-cols-2 xl:grid-cols-4 grid-rows-1 xl:grid-rows-3 min-w-full max-w-full pointer-events-none">
			<Circle circleNum={2}/>
			<Circle circleNum={2}/>
			<Circle circleNum={2}/>
			<Circle circleNum={2}/>
			<Circle circleNum={2}/>
			<Circle circleNum={2}/>
			<Circle circleNum={2}/>
			<Circle circleNum={2}/>
			<Circle circleNum={2}/>
			<Circle circleNum={2}/>
			<Circle circleNum={2}/>
			<Circle circleNum={2}/>
		</div>
	)
};

export default ShapesContainer;