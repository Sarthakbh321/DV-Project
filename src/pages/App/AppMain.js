import { Divider, Heading, Link } from "@chakra-ui/layout";

import React from "react";
import DashStats from "../../components/DashStats/DashStats";
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
			<Heading as="h1" size="2xl" style={{ marginTop: 10 }}>
				Some stats about the data
			</Heading>

			<DashStats />
			<Divider size="lg" style={{ margin: "20px 0" }} />
		</div>
	);
};

export default AppMain;
