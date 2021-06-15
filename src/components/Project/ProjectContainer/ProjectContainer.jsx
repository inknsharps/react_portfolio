import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectContainer.css";

const ProjectContainer = () => {
	const projects = [
		{
			projectName: "CodePasta",
			projectDesc: "A web application to manage code snippets, built with React, Tailwind CSS, Express, MongoDB and Node.js.",
			alignImage: "left",
			imageSrc: "https://raw.githubusercontent.com/inknsharps/CodePasta/main/img/header.jpg",
			githubLink: "https://github.com/inknsharps/CodePasta",
			deployLink: "https://pure-lake-84406.herokuapp.com/"
		},
		{
			projectName: "TicketTask",
			projectDesc: "A event CMS web application, built with Handlebars, Express, MySQL and Node.js",
			alignImage: "right",
			imageSrc: "https://raw.githubusercontent.com/inknsharps/webapp-portfolio/main/assets/images/tickettask-2.jpg",
			githubLink: "https://github.com/inknsharps/TicketTask",
			deployLink: "https://lit-escarpment-19563.herokuapp.com/"
		},
		{
			projectName: "WhiptUp",
			projectDesc: "A recipe generator and NYC compost/food scrap drop off locator.",
			alignImage: "left",
			imageSrc: "https://raw.githubusercontent.com/inknsharps/webapp-portfolio/main/assets/images/whiptup.jpg",
			githubLink: "https://github.com/inknsharps/WhiptUP",
			deployLink: "https://inknsharps.github.io/WhiptUP/"
		},
		{
			projectName: "Node Email Templater",
			projectDesc: "A CLI application built with Node.js and the Inquirer package to quickly generate email templates.",
			alignImage: "right",
			imageSrc: "https://raw.githubusercontent.com/inknsharps/webapp-portfolio/main/assets/images/node_email.jpg",
			githubLink: "https://github.com/inknsharps/node_email_templater",
			deployLink: "https://github.com/inknsharps/node_email_templater/releases/tag/1.0"
		},
		{
			projectName: "React Employee Dashboard",
			projectDesc: "A mock employee management dashboard web application built with React and the Random User API.",
			alignImage: "left",
			imageSrc: "https://raw.githubusercontent.com/inknsharps/webapp-portfolio/main/assets/images/employee_dashboard.jpg",
			githubLink: "https://github.com/inknsharps/react_employee_dashboard",
			deployLink: "https://github.com/inknsharps/react_employee_dashboard/deployments/activity_log?environment=github-pages"
		},
		{
			projectName: "React Portfolio",
			projectDesc: "The source code for this portfolio website!",
			alignImage: "right",
			imageSrc: "https://picsum.photos/300",
			githubLink: "https://github.com/inknsharps/react_portfolio",
			deployLink: "https://github.com/inknsharps/react_portfolio"
		}
	];

	const generateProjects = projects => projects.map(project => <ProjectCard { ...project } />);

	return (
		<main className="ProjectContainer grid grid-cols-1 gap-y-20">
			<h2 className="p-5 mx-16 bg-gradient-to-r from-green-500 via-indigo-500 to-red-500 bg-clip-text text-transparent text-7xl">Projects</h2>
			{ generateProjects(projects) }
		</main>
	)
};

export default ProjectContainer;