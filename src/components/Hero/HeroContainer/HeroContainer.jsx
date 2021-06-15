import React from "react";
import HeroHeader from "../HeroHeader/HeroHeader";
import HeroBody from "../HeroBody/HeroBody";
import "./HeroContainer.css";

const HeroContainer = () => {
	return (
		<div className="HeroContainer m-4 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-6 xl:min-h-screen">
			<HeroHeader />
			<HeroBody alignItems="items-end" textAlign="text-right" text="I'm a web developer, and classical musician."/>
			<HeroBody alignItems="items-start" textAlign="text-left" text="Click on any of the links in the navigation to view more about me and my work."/>
		</div>
	)
};

export default HeroContainer;