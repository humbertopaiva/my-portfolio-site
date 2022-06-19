import { Container, ContainerProps, Wrap } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface FullWidthContainerProps {
	children?: ReactNode;
	[x: string]: ContainerProps | ReactNode;
}

export const FullWidthContainer = ({
	children,
	...rest
}: FullWidthContainerProps) => {
	return (
		<Container minW="100vw" bgColor={"gray.800"} paddingY={8} {...rest}>
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
