import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

interface AboutBoxProps {
	text: string;
}

export const AboutBox = ({ text }: AboutBoxProps) => {
	return (
		<Flex
			direction={"column"}
			maxW="lg"
			h="auto"
			border="1px solid #4A5568"
			borderRadius={"8px"}
			color="gray.100"
		>
			<Flex
				borderBottom="1px solid #4A5568"
				p={"1rem 2rem"}
				justify="space-between"
				align="center"
			>
				<Heading as="h3" fontSize={"2xl"}>
					About
				</Heading>
				<Stack direction={"row"}>
					<Box
						w={"10px"}
						h="10px"
						borderRadius={"full"}
						bgColor={"red.400"}
					>
						{""}
					</Box>
					<Box
						w={"10px"}
						h="10px"
						borderRadius={"full"}
						bgColor={"yellow.400"}
					>
						{""}
					</Box>
					<Box
						w={"10px"}
						h="10px"
						borderRadius={"full"}
						bgColor={"green.400"}
					>
						{""}
					</Box>
				</Stack>
			</Flex>
			<Flex p={"2rem"}>
				<Text fontSize={"large"}>{text}</Text>
			</Flex>
		</Flex>
	);
};
