import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { PrismicDocument } from "@prismicio/types";
import { useEffect, useState } from "react";
import { PortfolioProject } from "../PortfolioProject";

export const PortfolioGallery = () => {
	const [projects] = useAllPrismicDocumentsByType("portfolio-article");
	const [projectsList, setProjectsList] = useState<PrismicDocument[]>();

	useEffect(() => {
		if (projects) {
			setProjectsList(projects);
			console.log(projects);
			return;
		}
		console.log("NAo carregoru");
	}, [projects]);

	return (
		<SimpleGrid w="100%">
			{projectsList?.map((project, index) => (
				<Flex
					key={index}
					mb={4}
					w="100%"
					justifyContent={index % 2 === 0 ? "" : "end"}
				>
					<PortfolioProject
						uid={project.uid}
						type={project.type}
						title={project.data.title[0].text}
						src={project.data["project-image"].url}
						isEven={index % 2 === 0 ? true : false}
					/>
				</Flex>
			))}
		</SimpleGrid>
	);
};
