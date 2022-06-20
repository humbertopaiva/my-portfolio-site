import { FullWidthContainer } from "../../components/FullWidthContainer";
import { PortfolioGallery } from "../../components/PortfolioGallery";
import { Contact } from "../../layout/Contact";
import { Footer } from "../../layout/Footer";
import { MyProjects } from "../../layout/Home/MyProjects";
import { Gallery } from "../../layout/Projects/Gallery";
import { Title } from "../../layout/Projects/Title";

export const Projects = () => {
	return (
		<>
			<Title />
			<Gallery />
			<Contact />
			<Footer />
		</>
	);
};
