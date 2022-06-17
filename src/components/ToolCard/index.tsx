import { Flex, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface ToolCardProps {
	name: string;
	icon: IconType;
}

export const ToolCard = ({ name, icon: Icon }: ToolCardProps) => {
	return (
		<Flex
			as={motion.div}
			direction="column"
			align={"center"}
			color="gray.100"
			p={6}
			fontSize="md"
			_hover={{
				color: "teal.400",
			}}
			whileHover={{ scale: 1.1 }}
			transition="0.2s linear"
		>
			<Icon fontSize={"50px"} />
			<Text mt={2}>{name}</Text>
		</Flex>
	);
};
