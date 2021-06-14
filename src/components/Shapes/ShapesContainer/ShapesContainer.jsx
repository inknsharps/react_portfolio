import React from "react";
import Circle from "../Circle/Circle";
import "./ShapesContainer.css";

const ShapesContainer = () => {
	return (
		<div className="ShapesContainer fixed inset-0 z-0 grid grid-cols-3 min-w-full max-w-full pointer-events-none">
			<Circle circleNum={5}/>
			<Circle circleNum={6}/>
			<Circle circleNum={5}/>
		</div>
	)
};

export default ShapesContainer;