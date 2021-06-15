import React from "react";
import AboutLink from "../../About/AboutLink/AboutLink";
import "./ContactContainer.css";

const ContactContainer = () => {
	return (
		<div className="ContactContainer grid grid-cols-1 gap-y-8 content-between p-16 bg-gradient-to-r from-green-500 via-indigo-500 to-red-500 bg-clip-text text-transparent">
			<h2 className="p-6 mx-16 text-8xl">Have a proposal or want to collaborate? Let's get in touch.</h2>
			<h3 className="p-6 mx-16 text-5xl">You can reach me at any of the below links:</h3>
			<AboutLink githubLink="https://github.com/inknsharps" linkedInLink="https://www.linkedin.com/in/neil-chen-8a596b1b9/" instaLink="https://www.instagram.com/ink.n.sharps" />
			<h4 className="p-6 mx-16 text-4xl">Or hit me up at my <a className="underline bg-red-500 text-white" href="https://www.inknsharps.com/" target="_blank" rel="noopener noreferrer">less web developer-y site</a>.</h4>
		</div>
	)
};

export default ContactContainer;