import { Button, Heading, Flex, Box, Divider } from "@chakra-ui/react";
import { FullWidthContainer } from "../../../components/FullWidthContainer";
import { PortfolioGallery } from "../../../components/PortfolioGallery";

export const MyProjects = () => {
	return (
		<FullWidthContainer>
			<Box pb={12}>
				<Heading
					as="h3"
					fontSize={["3xl"]}
					mt={6}
					fontFamily={"Source Code Pro, monospace"}
					fontWeight="500"
					color="cyan.600"
					textAlign={"center"}
				>
					//Portfólio de projetos
				</Heading>
			</Box>

			<PortfolioGallery />
			<Flex w="100%" justify="center">
				<Button
					colorScheme={"cyan"}
					w="300px"
					variant={"outline"}
					mt={12}
					alignSelf="center"
					p="1.5rem 2rem"
				>
					Ver mais projetos
				</Button>
			</Flex>
		</FullWidthContainer>
	);
};
