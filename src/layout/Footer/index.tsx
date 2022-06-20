import { Text } from "@chakra-ui/react";
import { FullWidthContainer } from "../../components/FullWidthContainer";

export const Footer = () => {
	return (
		<FullWidthContainer
			as="footer"
			textAlign="center"
			borderTop="1px solid #394355"
		>
			<Text color={"gray.500"} fontSize={"xs"} w="100%">
				Criado por Humberto Paiva - 2022
			</Text>
		</FullWidthContainer>
	);
};
