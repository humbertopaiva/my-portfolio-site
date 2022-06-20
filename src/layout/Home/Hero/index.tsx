import {
	Heading,
	Text,
	Flex,
	Image,
	Button,
	Box,
	Divider,
} from "@chakra-ui/react";
import { FullWidthContainer } from "../../../components/FullWidthContainer";
import avatarImg from "../../../assets/avatar.png";

export const Hero = () => {
	return (
		<FullWidthContainer
			minH="90vh"
			h="100%"
			display="flex"
			alignItems="center"
			bgGradient="linear(to-tl, gray.300, cyan.400, pink.200)"
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
					fontSize="6xl"
					as="h2"
					color={"gray.800"}
					fontWeight="700"
				>
					Humberto Paiva
				</Heading>
				<Heading
					height={"auto"}
					fontSize="large"
					as="h2"
					color={"gray.800"}
					fontWeight="700"
					mb={4}
				>
					Desenvolvedor Front End
				</Heading>
				<Divider mb={4} />
				<Text
					fontSize={"large"}
					fontWeight={600}
					maxW="300px"
					color="gray.700"
				>
					Ajudo a alavancar boas ideias unindo criatividade à
					tecnologia.
				</Text>
				<Button
					textAlign={"left"}
					mt={8}
					bgGradient="linear(to-tl, gray.300, cyan.400, pink.200)"
				>
					Entre em contato comigo
				</Button>
			</Flex>
			<Box maxW="400px">
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
