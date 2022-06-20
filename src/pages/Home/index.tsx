import { Hero } from "../../layout/Home/Hero";
import { About } from "../../layout/Home/About";
import { HardSkills } from "../../layout/Home/HardSkills";
import { MyProjects } from "../../layout/Home/MyProjects";
import { Contact } from "../../layout/Contact";
import { Footer } from "../../layout/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Home = () => {
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

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
