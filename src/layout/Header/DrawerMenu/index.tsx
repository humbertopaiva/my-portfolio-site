import {
	Heading,
	Stack,
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Text,
	IconButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavMenu } from "../NavMenu";

interface DrawerMenuProps {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const DrawerMenu = ({ isOpen, onOpen, onClose }: DrawerMenuProps) => {
	return (
		<>
			<IconButton
				mr={2}
				p={0}
				fontSize={"2xl"}
				variant={"ghost"}
				aria-label="Search database"
				icon={<AiOutlineMenu />}
				onClick={() => {
					onOpen();
				}}
				_focus={{
					bgColor: "transparent",
				}}
			/>
			<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent bgColor="gray.800">
					<DrawerCloseButton color="gray.200" />

					{/* HEADER */}
					<DrawerHeader color="gray.200" mb={6}>
						<Heading fontSize={"2xl"}>Humberto Paiva</Heading>
						<Text fontSize={"xs"} fontWeight="300" color="gray.400">
							Desenvovledor Front End
						</Text>
					</DrawerHeader>

					{/*BODY */}
					<DrawerBody>
						<Stack
							spacing={8}
							direction={"column"}
							letterSpacing={2}
							fontWeight={"lighter"}
							color={"gray.400"}
							textTransform={"uppercase"}
							fontSize={"xs"}
						>
							<NavMenu onClose={onClose} />
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};
