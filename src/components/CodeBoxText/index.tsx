import { Box, Container, Heading, HeadingProps } from "@chakra-ui/react";

interface CodeBoxTextProps {
	text: string;
	[x: string]: any;
}

export const CodeBoxText = ({ text, rest }: CodeBoxTextProps) => {
	return (
		<Heading
			height={"auto"}
			fontSize="3xl"
			as="h2"
			color={"gray.50"}
			bgColor={"#282C34"}
			p=".2rem .5rem"
			fontFamily={"Source Code Pro, monospace"}
			fontWeight="600"
			{...rest}
		>
			{text}
		</Heading>
	);
};
