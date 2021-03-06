import React from "react";
import "./Circle.css";

const Circle = ({ circleNum = 2 }) => {
	const dimensions = [24, 36, 48, 60, 72, 84, 96]
	const colors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"];
	const animationDelays = [0, 2000, 4000, 6000];

	const generateCircles = numOfCircles => {
		const circleArray = [];

		for (let i = 0; i < numOfCircles; i++) {
			const topCoordinate = Math.floor(Math.random() * 10);
			const leftCoordinate = Math.floor(Math.random() * 10);
			const bottomCoordinate = Math.floor(Math.random() * 10);
			const rightCoordinate = Math.floor(Math.random() * 10);
			const size = dimensions[Math.floor(Math.random() * dimensions.length)];
			const selectedColor = colors[Math.floor(Math.random() * colors.length)];
			const selectedDelay = animationDelays[Math.floor(Math.random() * animationDelays.length)];
			const newCircle = {
				index: i + 1,
				top: `top-${topCoordinate}`,
				left: `left-${leftCoordinate}`,
				bottom: `bottom-${bottomCoordinate}`,
				right: `right-${rightCoordinate}`,
				width: `w-${size}`,
				height: `h-${size}`,
				color: `bg-${selectedColor}-300`,
				delay: `animation-delay-${selectedDelay}`
			}
			circleArray.push(newCircle);
		}
		return circleArray.map(({ top, left, bottom, right, width, height, color, delay, index }) => {
			return <div key={ index } className={ `relative ${ top } ${ bottom } ${ left } ${ right } ${ width } ${ height } ${ color } rounded-full mix-blend-soft-light opacity-20 xl:opacity-25 animate-blob ${ delay }` }></div>
		})
	};

	return (
		<div className="Circle">
			{ generateCircles(circleNum) }
		</div>
	)
};

export default Circle;