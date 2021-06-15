import React from "react";
import "./HeroHeader.css";

const HeroHeader = () => {	
	return (
		<div className="HeroHeader lg:col-span-1 lg:row-span-2">
			<h2 className="p-2 xl:p-6 xl:mx-16 bg-gradient-to-r from-green-500 via-indigo-500 to-red-500 bg-clip-text text-transparent text-7xl xl:text-8xl text-left">Hello, my name is Neil Chen.</h2>
		</div>
	)
};

export default HeroHeader;