import { Heading, Text, Flex, Image, Button } from "@chakra-ui/react";
import { FullWidthContainer } from "../../../components/FullWidthContainer";
import avatarImg from "../../../assets/avatar.png";

export const Hero = () => {
	return (
		<FullWidthContainer minH="80vh" display="flex">
			<Flex
				fontFamily={"Source Code Pro, monospace"}
				maxW="450px"
				direction="column"
				justify={"center"}
			>
				<Text
					height={"auto"}
					w="auto"
					display={"inline"}
					fontSize="2xl"
					as="h2"
					color={"gray.50"}
					bgColor={"#282C34"}
					p=".2rem .5rem"
					fontWeight="600"
				>
					dev
				</Text>
				<Heading
					height={"auto"}
					fontSize="4xl"
					as="h2"
					color={"gray.50"}
					fontFamily={"Source Code Pro, monospace"}
					fontWeight="600"
				>
					Humberto Paiva
				</Heading>
				<Text color="gray.200">
					Blablablablabla bla bla bla blalblalbla blalblal
				</Text>
				<Button>Entre em contato</Button>
			</Flex>
			<Image alt="my profile pic" src={avatarImg} boxSize="400px"></Image>
		</FullWidthContainer>
	);
};
