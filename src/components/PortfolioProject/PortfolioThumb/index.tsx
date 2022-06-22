import { Box, Heading, Image, Flex, Button, Divider } from "@chakra-ui/react";
import { PortfolioProjectProps } from "../index";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

export const PortfolioThumb = ({
	src,
	title,
	isEven,
	uid,
}: PortfolioProjectProps) => {
	const navigate = useNavigate();
	return (
		<>
			<Flex
				color={"gray.50"}
				direction={["column-reverse", isEven ? "row-reverse" : "row"]}
				alignItems="center"
				data-aos={isEven ? "fade-left" : "fade-right"}
			>
				<Box
					m={{ base: 4, md: 12 }}
					w={{ base: "100%", md: "inherit" }}
				>
					<Heading
						as="h4"
						fontSize={"3xl"}
						fontWeight={600}
						color="cyan.600"
					>
						{title}
					</Heading>
					<Button
						variant="link"
						onClick={() => {
							navigate(`/projects/${uid}`);
							document.documentElement.scrollTop = 50;
						}}
					>
						Acessar projeto
					</Button>
				</Box>

				<Box
					as={motion.div}
					whileHover={{ scale: 1.03 }}
					transition="0.2s linear"
					w="100%"
					minW="300px"
					maxW="600px"
					h="250px"
					mb={6}
					position={"relative"}
					boxShadow="dark-lg"
					borderRadius={6}
					bgGradient={`linear(${
						isEven ? "to-r" : "to-l"
					}, gray.300, cyan.400, pink.200)`}
					opacity={0.7}
					_hover={{
						opacity: 1,
					}}
				>
					<Box
						w="100%"
						h="100%"
						position={"absolute"}
						bottom={1}
						overflow="hidden"
						borderRadius={6}
						_before={{
							position: "absolute",
							left: 0,
							bottom: 0,
							top: 0,
							width: "100%",
							height: "100%",
							content: "''",
							bgGradient: `linear(${
								isEven ? "to-l" : "to-r"
							}, cyan.600, cyan.800)`,
							opacity: 0.2,
						}}
					>
						<Image src={src} alt={title} />
					</Box>
				</Box>
			</Flex>
		</>
	);
};
