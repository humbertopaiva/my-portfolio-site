import { Box, Heading, Stack, Text } from "@chakra-ui/react";

export const Education = () => {
	return (
		<Box maxW="400px" p={4}>
			<Heading
				as="h3"
				fontSize={["3xl"]}
				mb={6}
				fontFamily={"Source Code Pro, monospace"}
				fontWeight="700"
				color="cyan.500"
				mt={{ base: "12", lg: "0" }}
			>
				Formação {"{"}
			</Heading>
			<Stack spacing={8}>
				<Box>
					<Text color={"gray.500"} mb={2}>
						Nov/2021 - Ago/2022
					</Text>
					<Heading as="h4" fontSize={"xl"} color="gray.200">
						Desenvolvedor Front End
					</Heading>
					<Text as="h4" fontSize={"md"} color="gray.200" mb={4}>
						Kenzie Academy Brasil
					</Text>
					<Text color="gray.400" w="90%" fontSize="sm">
						Curso de 1.000 horas de Desenvolvimento Front-End que
						abrange tecnologias além de soft skills necessárias para
						o mercado de trabalho. Entre as linguagens e tecnologias
						aprendidas, estão HTML5, CSS3, JavaScript (ES6+), React
						JS.
					</Text>
				</Box>
				<Box>
					<Text color={"gray.500"} mb={2}>
						Ago/2014 - Ago/2018
					</Text>
					<Heading as="h4" fontSize={"xl"} color="gray.200" mb={1}>
						Bacharelado em Publicidade e Propaganda
					</Heading>
					<Text as="h4" fontSize={"md"} color="gray.200" mb={4}>
						UniAcademia - Juiz de Fora (MG)
					</Text>
				</Box>
			</Stack>
			<Heading
				as="h3"
				fontSize={["3xl"]}
				fontFamily={"Source Code Pro, monospace"}
				fontWeight="700"
				color="cyan.500"
			>
				{"}"}
			</Heading>
		</Box>
	);
};
