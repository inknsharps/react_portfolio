import React from "react";
import AboutLink from "../AboutLink/AboutLink";
import "./AboutBody.css";

const AboutBody = () => {
	return (
		<article className="flex flex-col justify-evenly bg-gradient-to-r from-green-800 via-indigo-800 to-blue-800 bg-clip-text text-transparent text-2xl mr-32">
			<div className="AboutBody">
				<p>Neil Chen is a New York City based web developer, and freelance classical musician.</p>
				<br />
				<p>Praised for his ability to "deftly underpin the music's harmonic structure," (Nelson Mail, 2017), Neil graduated from The Juilliard School in 2017, completing a Masters of Historical Performance majoring in bassoon. As a performer, he has performed with Juilliard415, Les Arts Florissants, Bach Vespers at Holy Trinity, and the Toronto Chamber Choir. </p>
				<br />
				<p>He is currently attending the Columbia Engineering Bootcamp.</p>
			</div>
			<AboutLink githubLink="https://github.com/inknsharps" linkedInLink="https://www.linkedin.com/in/neil-chen-8a596b1b9/" instaLink="https://www.instagram.com/ink.n.sharps"/>
		</article>
	)
};

export default AboutBody;