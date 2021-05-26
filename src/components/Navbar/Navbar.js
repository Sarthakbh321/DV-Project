import { Text } from "@chakra-ui/layout";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<Text fontWeight="800" fontSize="2xl" color="teal">
				Data Viz.
			</Text>
			<div className="navbar-toolbar"></div>
		</div>
	);
};

export default Navbar;
