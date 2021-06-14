import React from "react";
import HeroHeader from "../HeroHeader/HeroHeader";
import HeroBody from "../HeroBody/HeroBody";
import "./HeroContainer.css";

const HeroContainer = () => {
	return (
		<div className="HeroContainer grid grid-cols-2 min-h-screen">
			<HeroHeader />
			<HeroBody alignItems="items-end" text="I'm a web developer, and classical musician."/>
			<HeroBody alignItems="items-center" text="Click on any of the links in the navigation to view more about me and my work."/>
		</div>
	)
};

export default HeroContainer;