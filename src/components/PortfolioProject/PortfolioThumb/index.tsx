import { Box, Heading, Image, Flex, Button, Divider } from "@chakra-ui/react";
import { PortfolioProjectProps } from "../index";
import { motion } from "framer-motion";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

export const PortfolioThumb = ({
	src,
	title,
	isEven,
}: PortfolioProjectProps) => {
	return (
		<>
			<Flex
				color={"gray.50"}
				direction={["column-reverse", isEven ? "row-reverse" : "row"]}
				alignItems="center"
			>
				<Box
					m={{ base: 4, md: 12 }}
					w={{ base: "100%", md: "inherit" }}
				>
					<Heading
						as="h4"
						fontSize={"xl"}
						fontWeight={600}
						color="cyan.600"
					>
						{title}
					</Heading>
					<Button variant="link">Acessar projeto</Button>
				</Box>

				<Box
					as={motion.div}
					whileHover={{ scale: 1.03 }}
					transition="0.2s linear"
					minW="300px"
					w="400px"
					h="250px"
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
							opacity: 0.5,
						}}
					>
						<Image src={src} alt={title} />
					</Box>
				</Box>
			</Flex>
		</>
	);
};
