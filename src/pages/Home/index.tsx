import { FormControl, Heading, Image } from "@chakra-ui/react";
import { AboutBox } from "../../components/AboutBox";
import { CodeBoxText } from "../../components/CodeBoxText";
import { FullWidthContainer } from "../../components/FullWidthContainer";
import avatarImg from "../../assets/avatar.png";
import { ToolKitBox } from "../../components/ToolkitBox";
import { ContactForm } from "../../components/ContactForm";

export const Home = () => {
	return (
		<>
			<FullWidthContainer
				children={
					<>
						<CodeBoxText text={"Texto qualquer"} />
					</>
				}
			/>

			<FullWidthContainer
				children={
					<>
						<AboutBox text="Blablabla bla blalalb bla lbalBlablabla bla blalalb bla lbalBlablabla bla blalalb bla lbalBlablabla bla blalalb bla lbalBlablabla bla blalalb bla lbalBlablabla bla blalalb bla lbalBlablabla bla blalalb bla lbalBlablabla bla blalalb bla lbalBlablabla bla blalalb bla lbalBlablabla bla blalalb bla lbalBlablabla bla blalalb bla lbalBlablabla bla blalalb bla lbalBlablabla bla blalalb bla lbalBlablabla bla blalalb bla lbalBlablabla bla blalalb bla lbalv" />
						<Image
							alt="my profile pic"
							src={avatarImg}
							boxSize="400px"
						></Image>
					</>
				}
			/>

			<FullWidthContainer children={<ToolKitBox />} />
			<FullWidthContainer children={<ContactForm />} />
		</>
	);
};
