import React from "react";
import HeroHeader from "../HeroHeader/HeroHeader";
import HeroBody from "../HeroBody/HeroBody";
import ShapesContainer from "../../Shapes/ShapesContainer/ShapesContainer";
import "./HeroContainer.css";

const HeroContainer = () => {
	return (
		<div className="HeroContainer grid grid-cols-2">
			<HeroHeader />
			<HeroBody />
			<ShapesContainer />
		</div>
	)
};

export default HeroContainer;