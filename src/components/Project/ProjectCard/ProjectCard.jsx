import React from "react";
import ProjectImage from "../ProjectImage/ProjectImage";
import ProjectBody from "../ProjectBody/ProjectBody";
import "./ProjectCard.css";

const ProjectCard = ({ projectName }) => {
	return (
		<article className="ProjectCard grid grid-cols-3 p-4 m-4 bg-gray-200 rounded-full">
			<ProjectImage />
			<ProjectBody projectName={ projectName } projectDesc="CodePasta is a web application to manage code snippets, and was built using React, Tailwind CSS, Express, MongoDB and Node.js."/>
		</article>
	)
};

export default ProjectCard;