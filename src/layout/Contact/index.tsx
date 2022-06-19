import { Heading, Flex, Button, Stack, Box, Wrap } from "@chakra-ui/react";
import { ContactForm } from "../../components/ContactForm";
import { FullWidthContainer } from "../../components/FullWidthContainer";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
	return (
		<FullWidthContainer>
			<Wrap
				w="100%"
				color="gray.50"
				bgColor={"gray.700"}
				p={6}
				justify="space-between"
				align={"stretch"}
				borderRadius={4}
			>
				<Flex direction={"column"} maxW="300px">
					<Heading>Entre em contato comigo</Heading>
					<Button
						leftIcon={<BsFillTelephoneFill />}
						borderRadius={2}
						variant="ghost"
						color="gray.600"
						borderColor={"gray.600"}
						fontSize={"2xl"}
						minH={"60px"}
						w={"350px"}
						p={0}
						m={0}
						_hover={{
							bgColor: "transparent",
							borderColor: "gray.400",
							color: "gray.500",
						}}
					>
						(32) 9 8855-5409
					</Button>

					<Stack mt={6} justify="space-between">
						<Stack direction={"row"}>
							<Button
								variant={"unstyled"}
								w="60px"
								h="60px"
								bgColor={"gray.400"}
								display="flex"
								alignItems={"center"}
								justifyContent="center"
								borderRadius={"full"}
							>
								<FaLinkedin fontSize={"32px"} />
							</Button>
							<Button
								variant={"unstyled"}
								w="60px"
								h="60px"
								bgColor={"gray.400"}
								display="flex"
								alignItems={"center"}
								justifyContent="center"
								borderRadius={"full"}
							>
								<FaGithub fontSize={"32px"} />
							</Button>
						</Stack>
					</Stack>
				</Flex>
				<Box w={["100%", "40%"]}>
					<ContactForm />
				</Box>
			</Wrap>
		</FullWidthContainer>
	);
};
