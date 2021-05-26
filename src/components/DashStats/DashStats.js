import React from "react";
import "./DashStats.css";
import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/stat";
import { SimpleGrid } from "@chakra-ui/layout";

const DashStats = () => {
	return (
		<SimpleGrid columns={4} style={{ marginTop: 30 }} spacing={10}>
			<Stat className="app-stat">
				<StatLabel>Total</StatLabel>
				<StatNumber color="teal">100</StatNumber>
				<StatHelpText>
					Total number of students in the dataset
				</StatHelpText>
			</Stat>
			<Stat className="app-stat">
				<StatLabel>Placed</StatLabel>
				<StatNumber color="teal">100</StatNumber>
				<StatHelpText>Total number of students placed</StatHelpText>
			</Stat>
			<Stat className="app-stat">
				<StatLabel>Boys Placed</StatLabel>
				<StatNumber color="teal">10</StatNumber>
				<StatHelpText>Number of boys that got placed</StatHelpText>
			</Stat>
			<Stat className="app-stat">
				<StatLabel>Girls Placed</StatLabel>
				<StatNumber color="teal">69</StatNumber>
				<StatHelpText>Number of girls that got placed</StatHelpText>
			</Stat>
		</SimpleGrid>
	);
};

export default DashStats;
