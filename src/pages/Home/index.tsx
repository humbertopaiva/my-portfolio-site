import { Button, FormControl, Heading, Image, Flex } from "@chakra-ui/react";
import { AboutBox } from "../../components/AboutBox";
import { CodeBoxText } from "../../components/CodeBoxText";
import { FullWidthContainer } from "../../components/FullWidthContainer";

import { ToolKitBox } from "../../components/ToolkitBox";
import { ContactForm } from "../../components/ContactForm";
import { PortfolioGallery } from "../../components/PortfolioGallery";
import { Education } from "../../components/Education";
import { Hero } from "../../layout/Home/Hero";
import { About } from "../../layout/Home/About";
import { HardSkills } from "../../layout/Home/HardSkills";
import { MyProjects } from "../../layout/Home/MyProjects";
import { Contact } from "../../layout/Contact";

export const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<HardSkills />
			<MyProjects />
			<Contact />
		</>
	);
};
