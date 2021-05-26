import { Divider, Heading, Link } from "@chakra-ui/layout";

import React from "react";
import DashStats from "../../components/DashStats/DashStats";
import GraphSection from "../../components/GraphSection/GraphSection";
import "./AppMain.css";

const AppMain = () => {
	return (
		<div className="app-main">
			<Heading as="h2" size="md">
				The dataset used can be found{" "}
				<Link
					color="teal"
					href="https://www.kaggle.com/benroshan/factors-affecting-campus-placement"
					isExternal
				>
					here.
				</Link>{" "}
			</Heading>
			<Heading as="h1" size="2xl" style={{ marginTop: 5 }}>
				Some stats about the data
			</Heading>

			<DashStats />
			<Divider size="lg" style={{ marginTop: "20px" }} />
			<GraphSection />
		</div>
	);
};

export default AppMain;
