import { Heading, Flex, Button, Stack, Box, Wrap } from "@chakra-ui/react";
import { ContactForm } from "../../components/ContactForm";
import { FullWidthContainer } from "../../components/FullWidthContainer";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";

export const Contact = () => {
	return (
		<FullWidthContainer paddingY={16}>
			<Wrap
				w="100%"
				color="gray.50"
				p={{ base: 2, md: 6 }}
				justify="space-between"
				align={"stretch"}
				borderRadius={4}
				spacing={{ base: 12, lg: 0 }}
			>
				<Flex direction={"column"} justify="space-between">
					<Heading as="h3" color="cyan.400" mb={{ base: 12, lg: 0 }}>
						Converse comigo
					</Heading>
					<Stack spacing={2} w="100%">
						<Button
							leftIcon={<BsFillTelephoneFill />}
							variant="unstyled"
							color="gray.300"
							fontSize={"lg"}
							fontWeight={400}
							_hover={{
								color: "cyan.500",
							}}
							textAlign="left"
						>
							(32) 9 8855-5409
						</Button>
						<Button
							leftIcon={<SiGmail />}
							variant="unstyled"
							color="gray.300"
							fontSize={{ base: "md", lg: "lg" }}
							fontWeight={400}
							textAlign="left"
							_hover={{
								color: "cyan.500",
							}}
						>
							humbertomoreira93@gmail.com
						</Button>
						<Button
							leftIcon={<MdLocationOn />}
							variant="unstyled"
							color="gray.300"
							fontSize={"lg"}
							fontWeight={400}
							textAlign="left"
							_hover={{
								color: "cyan.500",
							}}
						>
							Lima Duarte (MG)
						</Button>
					</Stack>

					<Stack mt={6} justify="space-between">
						<Stack direction={"row"}>
							<Button
								bgColor="gray.700"
								leftIcon={<FaLinkedin />}
								_hover={{
									color: "cyan.500",
								}}
							>
								Linkedin
							</Button>
							<Button
								bgColor="gray.700"
								leftIcon={<FaGithub />}
								_hover={{
									color: "cyan.500",
								}}
							>
								Github
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
