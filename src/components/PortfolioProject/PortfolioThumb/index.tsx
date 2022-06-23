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
	const handleClick = () => {
		navigate(`/projects/${uid}`);
		document.documentElement.scrollTop = 50;
	};
	return (
		<>
			<Flex
				color={"gray.50"}
				direction={["column-reverse", isEven ? "row-reverse" : "row"]}
				alignItems={["start", "center"]}
				data-aos={isEven ? "fade-left" : "fade-right"}
				w="100%"
			>
				<Box
					m={{ base: 6, md: 12 }}
					w={["100%", "50%"]}
					textAlign={["left", isEven ? "left" : "right"]}
				>
					<Heading
						as="h4"
						fontSize={["2xl", "3xl"]}
						fontWeight={600}
						color="cyan.600"
					>
						{title}
					</Heading>
					<Button variant="link" onClick={handleClick}>
						Acessar projeto
					</Button>
				</Box>

				<Box
					as={motion.div}
					whileHover={{ scale: 1.03 }}
					transition="0.2s linear"
					w="100%"
					h={["200px", "280px"]}
					position={"relative"}
					boxShadow="dark-lg"
					borderRadius={4}
					opacity={0.8}
					bgColor="gray.300"
					overflow={"hidden"}
					cursor="pointer"
					_hover={{
						opacity: 1,
					}}
					onClick={handleClick}
				>
					<Image
						objectFit={"cover"}
						boxSize="100%"
						src={src}
						alt={title}
					/>
				</Box>
			</Flex>
		</>
	);
};
