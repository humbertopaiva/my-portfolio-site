import { Button, Heading, Flex, Box, Divider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FullWidthContainer } from "../../../components/FullWidthContainer";
import { PortfolioGallery } from "../../../components/PortfolioGallery";
import { useAllPrismicDocumentsByType } from "@prismicio/react";

export const MyProjects = () => {
	const [projects] = useAllPrismicDocumentsByType("portfolio-article");

	const navigate = useNavigate();
	return (
		<FullWidthContainer>
			<Box pb={12}>
				<Heading
					as="h3"
					fontSize={["3xl"]}
					mt={12}
					fontFamily={"Source Code Pro, monospace"}
					fontWeight="500"
					color="gray.200"
					textAlign={"center"}
				>
					//Portfólio de projetos
				</Heading>
			</Box>

			{projects && (
				<PortfolioGallery projectsList={projects.splice(-2)} />
			)}
			<Flex w="100%" justify="center">
				<Button
					onClick={() => navigate("/projects")}
					colorScheme={"cyan"}
					w="300px"
					variant={"outline"}
					mt={12}
					alignSelf="center"
					p="1.5rem 2rem"
					_hover={{
						bgColor: "cyan.600",
						color: "gray.700",
					}}
				>
					Ver mais projetos
				</Button>
			</Flex>
		</FullWidthContainer>
	);
};
