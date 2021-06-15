import React from "react";
import ProjectLink from "../ProjectLink/ProjectLink";
import "./ProjectBody.css";

const ProjectBody = ({ projectName, projectDesc, githubLink, deployLink }) => {
	return (
		<div className="ProjectBody col-span-2 flex flex-col justify-evenly m-5 bg-white bg-gradient-to-r from-green-800 via-indigo-800 to-blue-800 bg-clip-text text-transparent rounded-full">
			<h3 className="p-5 mx-3 xl:mx-16 text-3xl lg:text-4xl xl:text-5xl">{ projectName }</h3>
			<p className="p-5 xl:mx-16 text-lg lg:text-2xl xl:text-3xl">{ projectDesc }</p>
			<ProjectLink githubLink={ githubLink } deployLink={ deployLink } />
		</div>
	)
};

export default ProjectBody;