import React from "react";
import HeroHeader from "../HeroHeader/HeroHeader";
import ShapesContainer from "../../Shapes/ShapesContainer/ShapesContainer";
import "./HeroContainer.css";

const HeroContainer = () => {
	return (
		<div className="HeroContainer">
			<HeroHeader />
			<ShapesContainer />
		</div>
	)
};

export default HeroContainer;