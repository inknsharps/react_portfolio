import React from "react";
import { NavLink } from "react-router-dom";
import NavbarLi from "../NavbarLi/NavbarLi";
import "./NavbarContainer.css";

const NavbarContainer = () => {
	return (
		<nav className="NavbarContainer flex justify-between p-5">
			<NavLink to="/">
				<h1 className="bg-gradient-to-l from-green-700 to-indigo-700 bg-clip-text text-transparent text-lg lg:text-2xl xl:text-3xl font-medium">Neil Chen</h1>
			</NavLink>
			<ul className="grid grid-cols-3 gap-x-5">
				<NavbarLi liText="About" liLink="about" />
				<NavbarLi liText="Projects" liLink="projects" />
				<NavbarLi liText="Contact" liLink="contact" />
			</ul>
		</nav>
	)
};

export default NavbarContainer;