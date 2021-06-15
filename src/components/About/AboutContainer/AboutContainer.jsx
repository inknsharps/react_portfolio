import React from "react";
import AboutBody from "../AboutBody/AboutBody";
import AboutImage from "../AboutImage/AboutImage";
import "./AboutContainer.css";

const AboutContainer = () => {
	return (
		<div className="AboutContainer grid grid-cols-1 xl:grid-cols-2">
			<AboutImage />
			<AboutBody />
		</div>
	)
};

export default AboutContainer;