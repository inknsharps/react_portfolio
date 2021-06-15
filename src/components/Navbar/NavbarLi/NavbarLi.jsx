import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarLi.css";

const NavbarLi = ({ liText, liLink }) => {
	return (
		<NavLink to={ liLink }>
			<li className="NavbarLi bg-gradient-to-r from-pink-800 to-red-800 bg-clip-text text-transparent text-lg xl:text-3xl">{ liText }</li>
		</NavLink>
	)
};

export default NavbarLi;