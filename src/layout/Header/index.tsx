import { Heading } from "@chakra-ui/react";
import { FullWidthContainer } from "../../components/FullWidthContainer";

export const Header = () => {
	return (
		<FullWidthContainer as="header" color="gray.50">
			<Heading fontFamily={"Source Code Pro, monospace"}>//h</Heading>
		</FullWidthContainer>
	);
};
