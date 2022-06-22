import { FullWidthContainer } from "../../components/FullWidthContainer";
import { PageTitle } from "../../components/PageTitle";
import { PortfolioGallery } from "../../components/PortfolioGallery";
import { Contact } from "../../layout/Contact";
import { Footer } from "../../layout/Footer";
import { MyProjects } from "../../layout/Home/MyProjects";
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
