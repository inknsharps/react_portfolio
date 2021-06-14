import React from "react";
import "./NavbarLi.css";

const NavbarLi = ({ liText, liLink }) => {
	return (
		<li className="NavbarLi bg-gradient-to-r from-pink-800 to-red-800 bg-clip-text text-transparent text-3xl text-3xl"><a href={ liLink }>{ liText }</a></li>
	)
};

export default NavbarLi;