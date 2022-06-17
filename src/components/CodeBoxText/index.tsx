import { Box, Container, Heading } from "@chakra-ui/react";

interface CodeBoxTextProps {
	text: string;
}

export const CodeBoxText = ({ text }: CodeBoxTextProps) => {
	return (
		<Heading
			height={"auto"}
			as="h2"
			color={"gray.50"}
			bgColor={"#282C34"}
			p=".2rem .5rem"
			fontFamily={"Source Code Pro, monospace"}
			fontWeight="600"
		>
			{text}
		</Heading>
	);
};
