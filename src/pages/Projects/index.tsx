import { useEffect } from "react";
import { PageTitle } from "../../components/PageTitle";
import { Contact } from "../../layout/Contact";
import { Footer } from "../../layout/Footer";
import { Gallery } from "../../layout/Projects/Gallery";

export const Projects = () => {
	useEffect(() => {
		document.documentElement.scrollTop = -20;
	}, []);

	return (
		<>
			<PageTitle page="Projetos" title="Meu portfólio" />
			<Gallery />
			<Contact />
			<Footer />
		</>
	);
};
