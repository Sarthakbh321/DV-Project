import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/">
				<Text fontWeight="800" fontSize="2xl" color="teal">
					PlacedStats
				</Text>
			</Link>
			<div className="navbar-toolbar">
				<Link to="/" className="nav-links">
					About Project
				</Link>
				<Link to="/" className="nav-links">
					About Us
				</Link>
				<Link to="/app" className="nav-links">
					<Button colorScheme="teal" variant="solid">
						See Stats!
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
