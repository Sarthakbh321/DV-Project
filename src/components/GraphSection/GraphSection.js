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
						2. Select the attributes
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
				</div>
				<div className="graph-inputs">
					<div className="img-output"></div>
				</div>
			</SimpleGrid>
		</div>
	);
};

export default GraphSection;
