import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectContainer.css";

const ProjectContainer = () => {
	return (
		<main className="ProjectContainer">
			<h2 className="p-5 mx-16 bg-gradient-to-r from-green-500 via-indigo-500 to-red-500 bg-clip-text text-transparent text-7xl">Projects</h2>
			<ProjectCard projectName="CodePasta"/>
		</main>
	)
};

export default ProjectContainer;