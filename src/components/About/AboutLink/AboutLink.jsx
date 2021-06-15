import React from "react";
import "./AboutLink.css";

const AboutLink = ({ githubLink, linkedInLink, instaLink }) => {
	return (
		<div className="AboutLink flex flex-row justify-center">
			<a className="mx-3" href={ githubLink }><i class="fab fa-github fa-3x"></i></a>
			<a className="mx-3" href={ linkedInLink }><i class="fab fa-linkedin fa-3x"></i></a>
			<a className="mx-3" href={ instaLink }><i class="fab fa-instagram fa-3x"></i></a>
		</div>
	)
};

export default AboutLink;