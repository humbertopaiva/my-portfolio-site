import {
	Heading,
	Text,
	Flex,
	Image,
	Button,
	Box,
	Divider,
	Show,
	Stack,
} from "@chakra-ui/react";
import { FullWidthContainer } from "../../../components/FullWidthContainer";
import avatarImg from "../../../assets/avatar.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Hero = () => {
	return (
		<FullWidthContainer
			minH="90vh"
			h="100%"
			display="flex"
			alignItems="center"
		>
			<Flex
				maxW="500px"
				direction="column"
				justify={"center"}
				alignItems="start"
				zIndex="5000"
			>
				<Heading
					height={"auto"}
					fontSize={["5xl", "6xl"]}
					as="h2"
					color={"cyan.500"}
					fontWeight="700"
					lineHeight={"3rem"}
					mb={4}
				>
					Humberto Paiva
				</Heading>
				<Heading
					height={"auto"}
					fontSize={["xl", "2xl"]}
					as="h2"
					color={"cyan.500"}
					fontWeight="400"
					mb={4}
				>
					Desenvolvedor Front End
				</Heading>

				<Text
					fontSize={"large"}
					fontWeight={400}
					mt={2}
					maxW="300px"
					color="gray.500"
				>
					Te ajudo a alavancar boas ideias com criatividade e
					tecnologia.
				</Text>
				<Stack mt={10} mb={12} justify="space-between" color="gray.200">
					<Stack direction={"row"}>
						<Button
							bgColor="gray.700"
							leftIcon={<FaLinkedin />}
							_hover={{
								color: "cyan.500",
							}}
							onClick={() => {
								window.open(
									"https://www.linkedin.com/in/des-humbertopaiva/",
									"_blank"
								);
							}}
						>
							Linkedin
						</Button>
						<Button
							bgColor="gray.700"
							leftIcon={<FaGithub />}
							_hover={{
								color: "cyan.500",
							}}
							onClick={() => {
								window.open(
									"https://www.github.com/humbertopaiva/",
									"_blank"
								);
							}}
						>
							Github
						</Button>
					</Stack>
				</Stack>
			</Flex>
			<Box maxW="400px" data-aos="fade-left">
				<Image
					alt="my profile pic"
					src={avatarImg}
					objectFit={"cover"}
					w="100%"
				></Image>
			</Box>
		</FullWidthContainer>
	);
};
