import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { PrismicDocument } from "@prismicio/types";
import { useEffect, useState } from "react";
import { PortfolioProject } from "../PortfolioProject";

interface PortfolioGalleryInterface {
	projectsList: PrismicDocument[] | null;
}

export const PortfolioGallery = ({
	projectsList,
}: PortfolioGalleryInterface) => {
	return (
		<SimpleGrid w="100%">
			{projectsList &&
				projectsList.map((project, index) => (
					<Flex
						key={index}
						mb={6}
						w="100%"
						justifyContent={["start", index % 2 === 0 ? "" : "end"]}
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
