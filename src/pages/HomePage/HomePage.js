import React from "react";
import { Button } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Heading, SimpleGrid } from "@chakra-ui/layout";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<SimpleGrid
			className="home-grid"
			columns={2}
			style={{ backgroundImage: "url('/images/home-wave.svg')" }}
		>
			<div>
				<Heading as="h1" size="4xl" fontWeight="900">
					Placement Stats
				</Heading>
				<Heading
					as="h5"
					size="lg"
					color="teal"
					style={{ marginTop: "10px" }}
				>
					Get beautiful visualizations of all the statistics related
					to college placements!
				</Heading>
				<Link to="/app">
					<Button
						rightIcon={<ArrowForwardIcon />}
						colorScheme="teal"
						variant="solid"
						size="lg"
						style={{ marginTop: "50px" }}
					>
						Get Started
					</Button>
				</Link>
			</div>
			<div>
				<img src="/images/tools.svg" alt="illustration" />
			</div>
		</SimpleGrid>
	);
};

export default HomePage;
