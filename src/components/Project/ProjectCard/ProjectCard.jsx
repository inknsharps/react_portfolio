import React from "react";
import ProjectImage from "../ProjectImage/ProjectImage";
import ProjectBody from "../ProjectBody/ProjectBody";
import "./ProjectCard.css";

const ProjectCard = ({ projectName = "Project Name", projectDesc = "Project Description", alignImage = "left", imageSrc = "https://picsum.photos/400/200", githubLink = "#", deployLink ="#" }) => {
	switch(alignImage) {
		case "left":
			return (
				<article className="ProjectCard grid grid-cols-1 xl:grid-cols-3 p-8 lg:p-6 xl:p-4 m-4 bg-gray-200 rounded-full">
					<ProjectImage imageSrc={ imageSrc } />
					<ProjectBody projectName={ projectName } projectDesc={ projectDesc } githubLink={ githubLink } deployLink={ deployLink } />
				</article>
			)
		case "right":
			return (
				<article className="ProjectCard grid grid-cols-1 xl:grid-cols-3 p-8 xl:p-4 m-4 bg-gray-200 rounded-full">
					<ProjectBody projectName={ projectName } projectDesc={ projectDesc } githubLink={ githubLink } deployLink={ deployLink } />
					<ProjectImage imageSrc={ imageSrc } />
				</article>
			)	
		default:
			return null;	
	}
};

export default ProjectCard;