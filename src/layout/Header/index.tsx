import { Heading } from "@chakra-ui/react";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { useEffect } from "react";

export const Header = () => {
	const [projects] = useAllPrismicDocumentsByType("portfolio-article");

	useEffect(() => {
		console.log(projects);
	}, []);

	return <Heading>Header</Heading>;
};
