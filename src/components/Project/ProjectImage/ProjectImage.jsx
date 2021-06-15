import React from "react";
import "./ProjectImage.css";

const ProjectImage = ({ imageSrc }) => {
	return (
		<div className="ProjectImage col-span-1 grid grid-cols-1 justify-items-center items-center gap-y-4 m-4">
			<img className="rounded-full ring-2 ring-offset-4" src={ imageSrc } alt="placeholder"></img>
		</div>
	)
};

export default ProjectImage;