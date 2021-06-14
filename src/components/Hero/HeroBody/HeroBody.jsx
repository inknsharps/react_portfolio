import React from "react";
import "./HeroBody.css";

const HeroBody = ({ alignItems, text }) => {
	return (
		<div className={`HeroBody flex ${ alignItems } row-span-2`}>
			<h3 className="p-5 mx-16 bg-gradient-to-r from-green-800 via-indigo-800 to-red-800 bg-clip-text text-transparent text-5xl">{ text }</h3>
		</div>
	)
};

export default HeroBody;