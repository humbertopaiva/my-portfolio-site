import { Heading, Stack, Hide, Show } from "@chakra-ui/react";
import { FullWidthContainer } from "../../components/FullWidthContainer";
import { NavMenu } from "./NavMenu";
import { DrawerMenu } from "./DrawerMenu";

export const Header = () => {
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
					fontWeight={"lighter"}
					color={"gray.400"}
					textTransform={"uppercase"}
					fontSize={"xs"}
				>
					<NavMenu />
				</Stack>
			</Hide>

			{/* DRAWER MENU */}
			<Show below="md">
				<DrawerMenu />
			</Show>
		</FullWidthContainer>
	);
};
