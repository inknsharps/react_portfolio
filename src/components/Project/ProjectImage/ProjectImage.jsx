import React from "react";
import "./ProjectImage.css";

const ProjectImage = () => {
	return (
		<div className="ProjectImage grid grid-cols-2 justify-items-center gap-y-4 m-4">
			<img className="rounded-full ring-2 ring-offset-4" src="https://picsum.photos/200" alt="placeholder"></img>
			<img className="rounded-full ring-2 ring-offset-4" src="https://picsum.photos/200" alt="placeholder"></img>
			<img className="rounded-full ring-2 ring-offset-4" src="https://picsum.photos/200" alt="placeholder"></img>
			<img className="rounded-full ring-2 ring-offset-4" src="https://picsum.photos/200" alt="placeholder"></img>
		</div>
	)
};

export default ProjectImage;