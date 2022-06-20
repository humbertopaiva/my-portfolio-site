import { Button, Flex } from "@chakra-ui/react";
import { FullWidthContainer } from "../../../components/FullWidthContainer";
import { PortfolioGallery } from "../../../components/PortfolioGallery";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Gallery = () => {
	return (
		<FullWidthContainer>
			<PortfolioGallery />
			<Flex w="100%" justify="center">
				<Button
					colorScheme={"cyan"}
					w="300px"
					variant={"outline"}
					mt={12}
					alignSelf="center"
					p="1.5rem 2rem"
					_hover={{
						bgColor: "cyan.600",
						color: "gray.700",
					}}
					leftIcon={<FaGithub />}
					onClick={() => {
						window.open(
							"https://www.github.com/humbertopaiva/",
							"_blank"
						);
					}}
				>
					Repositório do Github
				</Button>
			</Flex>
		</FullWidthContainer>
	);
};
