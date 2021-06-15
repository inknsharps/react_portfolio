import React from "react";
import ProjectLink from "../ProjectLink/ProjectLink";
import "./ProjectBody.css";

const ProjectBody = ({ projectName, projectDesc }) => {
	return (
		<div className="ProjectBody col-span-2 flex flex-col justify-evenly m-5 bg-white from-white via-gray-100 to-white rounded-full">
			<h3 className="p-5 mx-16 bg-gradient-to-r from-green-800 via-indigo-800 to-blue-800 bg-clip-text text-transparent text-5xl">{ projectName }</h3>
			<p className="p-5 mx-16 bg-gradient-to-r from-green-800 via-indigo-800 to-blue-800 bg-clip-text text-transparent text-3xl">{ projectDesc }</p>
			<ProjectLink />
		</div>
	)
};

ProjectBody.defaultProps = {
	projectName: "Project Name",
	projectDesc: "Project Description"
};

export default ProjectBody;