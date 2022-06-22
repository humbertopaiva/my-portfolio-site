import { PageTitle } from "../../components/PageTitle";
import { Contact } from "../../layout/Contact";
import { Footer } from "../../layout/Footer";
import { Gallery } from "../../layout/Projects/Gallery";

export const Projects = () => {
	return (
		<>
			<PageTitle page="Projetos" title="Meu portfólio" />
			<Gallery />
			<Contact />
			<Footer />
		</>
	);
};
