import { Heading, Stack, Hide, Show, useDisclosure } from "@chakra-ui/react";
import { FullWidthContainer } from "../../components/FullWidthContainer";
import { NavMenu } from "./NavMenu";
import { DrawerMenu } from "./DrawerMenu";

export const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<FullWidthContainer
			as="header"
			color="gray.50"
			bgColor="gray.800"
			borderBottom="2px solid #191a1b"
		>
			<Heading color={"cyan.400"}>//h</Heading>

			{/* LISTA DE LINKS */}
			<Hide below="md">
				<Stack
					spacing={8}
					direction={"row"}
					align="center"
					letterSpacing={2}
					color={"gray.400"}
					textTransform={"uppercase"}
					fontSize={"xs"}
				>
					<NavMenu onClose={onClose} />
				</Stack>
			</Hide>

			{/* DRAWER MENU */}
			<Show below="md">
				<DrawerMenu isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
			</Show>
		</FullWidthContainer>
	);
};
