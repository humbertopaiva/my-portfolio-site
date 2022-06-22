import { Hero } from "../../layout/Home/Hero";
import { About } from "../../layout/Home/About";
import { HardSkills } from "../../layout/Home/HardSkills";
import { MyProjects } from "../../layout/Home/MyProjects";
import { Contact } from "../../layout/Contact";
import { Footer } from "../../layout/Footer";

export const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<HardSkills />
			<MyProjects />
			<Contact />
			<Footer />
		</>
	);
};
