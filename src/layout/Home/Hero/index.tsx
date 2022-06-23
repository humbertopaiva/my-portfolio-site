import {
	Heading,
	Text,
	Flex,
	Image,
	Button,
	Box,
	Stack,
} from "@chakra-ui/react";
import { FullWidthContainer } from "../../../components/FullWidthContainer";
import avatarImg from "../../../assets/avatar.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
				p={4}
			>
				<Heading
					height={"auto"}
					fontSize={["5xl", "6xl"]}
					fontFamily="'Anek Latin', sans-serif"
					as="h2"
					color={"cyan.500"}
					fontWeight="600"
					lineHeight={"3rem"}
					mb={4}
					mt={4}
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
				<Stack mt={8} mb={12} justify="space-between" color="gray.200">
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
			<Box maxW="400px" mb={4}>
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
