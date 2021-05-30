import { Button } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
	Divider,
	Flex,
	Heading,
	SimpleGrid,
	Stack,
	Text,
} from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Select } from "@chakra-ui/select";
import React, { useState } from "react";
import "./GraphSection.css";

const GraphSection = () => {
	const [gender, setGender] = useState("both");
	const [chart, setChart] = useState("bar");
	const [subjects, setSubjects] = useState("all");

	return (
		<div className="graph-section">
			<SimpleGrid columns={2} spacing={10} style={{ width: "100%" }}>
				<div className="graph-inputs">
					<Heading as="h3" size="lg" style={{ marginBottom: 20 }}>
						1. Select gender
					</Heading>
					<RadioGroup value={gender} onChange={setGender}>
						<Stack direction="row" spacing={10}>
							<Radio value="male" colorScheme="teal">
								Male
							</Radio>
							<Radio value="female" colorScheme="teal">
								Female
							</Radio>
							<Radio value="both" colorScheme="teal">
								Both
							</Radio>
						</Stack>
					</RadioGroup>
					<Divider size="lg" style={{ margin: "20px 0" }} />
					<Heading as="h3" size="lg" style={{ marginBottom: 20 }}>
						2. Select type of chart
					</Heading>
					<Select
						placeholder="Select chart type"
						variant="filled"
						value={chart}
						onChange={(e) => setChart(e.target.value)}
					>
						<option value="bar">Bar Chart</option>
						<option value="pie">Pie Chart</option>
						<option value="scatter">Scatter Plot</option>
						<option value="hist">Histogram</option>
					</Select>
					<Divider size="lg" style={{ margin: "20px 0" }} />

					<Heading as="h3" size="lg" style={{ marginBottom: 20 }}>
						3. Select the attributes
					</Heading>
					<Flex>
						<Select
							placeholder="Select attribute"
							variant="filled"
						></Select>
						<Text
							color="teal"
							fontWeight="800"
							style={{ margin: "0 10px", display: "flex" }}
							alignItems="center"
						>
							VS
						</Text>
						<Select
							placeholder="Select attribute"
							variant="filled"
						></Select>
					</Flex>
					<Divider size="lg" style={{ margin: "20px 0" }} />
					<Heading as="h3" size="lg" style={{ marginBottom: 20 }}>
						4. Filter Subjects
					</Heading>
					<RadioGroup value={subjects} onChange={setSubjects}>
						<Stack direction="row" spacing={10}>
							<Radio value="all" colorScheme="teal">
								All subjects
							</Radio>
							<Radio value="science" colorScheme="teal">
								Science
							</Radio>
							<Radio value="commerce" colorScheme="teal">
								Commerce
							</Radio>
							<Radio value="arts" colorScheme="teal">
								Arts
							</Radio>
						</Stack>
					</RadioGroup>

					<Button
						variant="solid"
						colorScheme="teal"
						rightIcon={<ArrowForwardIcon />}
						style={{ margin: "40px 0" }}
					>
						Generate
					</Button>
				</div>
				<div className="graph-inputs">
					<div className="img-output"></div>
				</div>
			</SimpleGrid>
		</div>
	);
};

export default GraphSection;
