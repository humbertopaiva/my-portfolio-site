import { Container, Wrap } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface FullWidthContainerProps {
	children?: ReactNode;
}

export const FullWidthContainer = ({ children }: FullWidthContainerProps) => {
	return (
		<Container minW="100vw" bgColor={"#454545"}>
			<Wrap
				margin={"0 auto"}
				maxW="5xl"
				w="100%"
				justify={"space-between"}
			>
				{children}{" "}
			</Wrap>
		</Container>
	);
};
