import { Flex, SimpleGrid } from "@chakra-ui/react";
import { PrismicDocument } from "@prismicio/types";
import { useLocation } from "react-router-dom";
import { PortfolioProject } from "../PortfolioProject";

interface PortfolioGalleryInterface {
	projectsList: PrismicDocument[] | null;
}

export const PortfolioGallery = ({
	projectsList,
}: PortfolioGalleryInterface) => {
	const location = useLocation();
	return (
		<SimpleGrid w="100%">
			{projectsList &&
				projectsList.map((project, index) => {
					if (index == 2 && location.pathname === "/") return;
					else
						return (
							<Flex
								key={index}
								mb={6}
								w="100%"
								justifyContent={[
									"start",
									index % 2 === 0 ? "" : "end",
								]}
							>
								<PortfolioProject
									uid={project.uid}
									type={project.type}
									title={project.data.title[0].text}
									src={project.data["project-image"].url}
									isEven={index % 2 === 0 ? true : false}
								/>
							</Flex>
						);
				})}
		</SimpleGrid>
	);
};
