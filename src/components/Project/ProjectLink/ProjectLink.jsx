import React from "react";
import "./ProjectLink.css";

const ProjectLink = ({ githubLink, deployLink }) => {
	return (
		<div className="ProjectLink flex flex-row justify-center">
			<a className="mx-3" href={ githubLink }><i className="fab fa-github fa-3x"></i></a>
			<a className="mx-3" href={ deployLink }><i className="fas fa-file fa-3x"></i></a>
		</div>
	)
};

export default ProjectLink;