import { Button, Heading, Flex, Box, Divider } from "@chakra-ui/react";
import { FullWidthContainer } from "../../../components/FullWidthContainer";
import { PortfolioGallery } from "../../../components/PortfolioGallery";

export const MyProjects = () => {
	return (
		<FullWidthContainer>
			<Box pb={12}>
				<Heading fontSize={"36px"} color="gray.100">
					Portfólio de projetos
				</Heading>
				<Divider />
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
