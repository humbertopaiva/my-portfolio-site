import { Button, Flex } from "@chakra-ui/react";
import { FullWidthContainer } from "../../../components/FullWidthContainer";
import { PortfolioGallery } from "../../../components/PortfolioGallery";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { PrismicDocument } from "@prismicio/types";
import { useEffect, useState } from "react";

export const Gallery = () => {
	const [projectsList, setProjectsList] = useState<PrismicDocument[]>([]);
	const [projects] = useAllPrismicDocumentsByType("portfolio-article");

	useEffect(() => {
		if (projects) {
			setProjectsList(projects);
			return;
		}
	}, [projects]);

	return (
		<FullWidthContainer>
			{projectsList && <PortfolioGallery projectsList={projectsList} />}
			<Flex w="100%" justify="center">
				<Button
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
					leftIcon={<FaGithub />}
					onClick={() => {
						window.open(
							"https://www.github.com/humbertopaiva/",
							"_blank"
						);
					}}
				>
					Repositório do Github
				</Button>
			</Flex>
		</FullWidthContainer>
	);
};
