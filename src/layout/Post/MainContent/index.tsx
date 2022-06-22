import {
	Button,
	Box,
	Image,
	Link,
	Flex,
	Wrap,
	Stack,
	Divider,
} from "@chakra-ui/react";

import { PrismicRichText } from "@prismicio/react";
import { PrismicDocument } from "@prismicio/types";
import { FullWidthContainer } from "../../../components/FullWidthContainer";
import "./styles.css";

export const MainContent = ({ post }: { post: PrismicDocument }) => {
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
				<Wrap justify={"center"} pb={8} bgColor="gray.600">
					<Wrap pt={8} justify="center">
						<Button
							minW="240px"
							colorScheme={"cyan"}
							onClick={() => {
								window.open(
									post?.data["web-link"].url,
									"_blank"
								);
							}}
						>
							Ver o projeto na web
						</Button>
						<Button
							minW="240px"
							colorScheme={"cyan"}
							variant={"outline"}
							onClick={() => {
								window.open(
									post?.data["github-link"].url,
									"_blank"
								);
							}}
						>
							Respositório do Github
						</Button>
					</Wrap>
				</Wrap>
			</Flex>
		</FullWidthContainer>
	);
};
