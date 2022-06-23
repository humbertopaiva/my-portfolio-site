import { Button, Box, Image, Flex, Wrap, Divider } from "@chakra-ui/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicDocument } from "@prismicio/types";
import { FullWidthContainer } from "../../../components/FullWidthContainer";
import { FaGithub } from "react-icons/fa";
import "./styles.css";
import { MdOpenInNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const MainContent = ({ post }: { post: PrismicDocument }) => {
	const navigate = useNavigate();
	return (
		<FullWidthContainer color="gray.50">
			<Flex
				direction={"column"}
				w="full"
				bgColor={"gray.700"}
				borderRadius={4}
			>
				<Box maxH="300px" w="full">
					<Image
						src={post?.data["project-image"].url}
						alt={post?.data.title[0].text}
						boxSize="full"
						objectFit={"cover"}
					/>
				</Box>
				<Flex p={8} mt={[0, 4]} direction={["column-reverse", "row"]}>
					<Box maxW={["100%", "50%"]}>
						<Image
							w="100%"
							objectFit="cover"
							alt="mockup"
							src={
								"https://www.pngmart.com/files/4/Apple-Computer-PNG-Pic.png"
							}
						/>
					</Box>
					<Box
						maxW={["100%", "50%"]}
						pl={[0, 12]}
						color="gray.200"
						fontWeight={"light"}
					>
						{post && (
							<PrismicRichText field={post.data["rich-text"]} />
						)}
					</Box>
				</Flex>
				<Divider />
				<Wrap justify={"center"} pb={8} bgColor="cyan.500">
					<Wrap pt={8} justify="center">
						{post?.data["web-link"].url && (
							<Button
								minW="240px"
								colorScheme={"cyan"}
								leftIcon={<MdOpenInNew />}
								onClick={() => {
									window.open(
										post?.data["web-link"].url,
										"_blank"
									);
								}}
							>
								Ver o projeto na web
							</Button>
						)}

						{post?.data["github-link"].url && (
							<Button
								minW="240px"
								colorScheme={"blackAlpha"}
								leftIcon={<FaGithub />}
								onClick={() => {
									window.open(
										post?.data["github-link"].url,
										"_blank"
									);
								}}
							>
								Repositório do Github
							</Button>
						)}
					</Wrap>
				</Wrap>
			</Flex>
			<Box w="100%" textAlign={"center"}>
				<Button
					colorScheme={"cyan"}
					variant="link"
					mt={4}
					onClick={() => navigate("/projects")}
				>
					Voltar
				</Button>
			</Box>
		</FullWidthContainer>
	);
};
