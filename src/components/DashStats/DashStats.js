import React, { useEffect, useState } from "react";
import "./DashStats.css";
import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/stat";
import { SimpleGrid } from "@chakra-ui/layout";
import axios from "axios";

const DashStats = () => {
	const [stats, setStats] = useState({});

	const getStats = async () => {
		const url = `${process.env.REACT_APP_BACKEND_URL}/stats`;

		try {
			await axios.get(url).then((res) => {
				// console.log(res);
				setStats(res.data);
			});
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getStats();
	}, []);

	return (
		<SimpleGrid columns={4} style={{ marginTop: 30 }} spacing={10}>
			<Stat className="app-stat">
				<StatLabel>Total</StatLabel>
				<StatNumber color="teal">{stats.total}</StatNumber>
				<StatHelpText>
					Total number of students in the dataset
				</StatHelpText>
			</Stat>
			<Stat className="app-stat">
				<StatLabel>Placed</StatLabel>
				<StatNumber color="teal">{stats.placed}</StatNumber>
				<StatHelpText>Total number of students placed</StatHelpText>
			</Stat>
			<Stat className="app-stat">
				<StatLabel>Boys Placed</StatLabel>
				<StatNumber color="teal">{stats.boysPlaced}</StatNumber>
				<StatHelpText>Number of boys that got placed</StatHelpText>
			</Stat>
			<Stat className="app-stat">
				<StatLabel>Girls Placed</StatLabel>
				<StatNumber color="teal">{stats.girlsPlaced}</StatNumber>
				<StatHelpText>Number of girls that got placed</StatHelpText>
			</Stat>
		</SimpleGrid>
	);
};

export default DashStats;
