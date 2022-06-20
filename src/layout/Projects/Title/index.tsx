import { FullWidthContainer } from "../../../components/FullWidthContainer";
import { Box, Heading, Text } from "@chakra-ui/react";

export const Title = () => {
	return (
		<FullWidthContainer>
			<Box pt={12} mt={12}>
				<Text
					color="gray.500"
					fontFamily={"Source Code Pro, monospace"}
					fontSize={"lg"}
				>
					// Projetos
				</Text>
				<Heading
					as="h2"
					fontSize={["5xl"]}
					fontWeight="700"
					color="cyan.500"
					textAlign={"center"}
					mb={12}
				>
					Meu portfólio
				</Heading>
			</Box>
		</FullWidthContainer>
	);
};
