import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export const Education = () => {
	return (
		<Box maxW="400px">
			<Heading
				fontSize={"36px"}
				color="gray.100"
				fontFamily={"Source Code Pro, monospace"}
				mb={4}
			>
				Formação {"{"}
			</Heading>
			<Stack spacing={10}>
				<Box>
					<Text color={"gray.500"} mb={2}>
						Ago/2022
					</Text>
					<Heading as="h4" fontSize={"xl"} color="cyan.500" mb={1}>
						Desenvolvedor Front End
					</Heading>
					<Text as="h4" fontSize={"md"} color="cyan.500" mb={4}>
						Kenzie Academy Brasil
					</Text>
					<Text color="gray.400">
						Curso de 1.000 horas de Desenvolvimento Front-End que
						abrange tecnologias além de soft skills necessárias para
						o mercado de trabalho. Entre as linguagens e tecnologias
						aprendidas, estão HTML5, CSS3, JavaScript (ES6+), React
					</Text>
				</Box>
				<Box>
					<Text color={"gray.500"} mb={2}>
						Ago/2014 - Ago/2018
					</Text>
					<Heading as="h4" fontSize={"xl"} color="cyan.500" mb={1}>
						Bacharelado em Publicidade e Propaganda
					</Heading>
					<Text as="h4" fontSize={"md"} color="cyan.500" mb={4}>
						UniAcademia Juiz de Fora (MG)
					</Text>
				</Box>
			</Stack>
			<Heading
				fontSize={"36px"}
				color="gray.100"
				fontFamily={"Source Code Pro, monospace"}
			>
				{"}"}
			</Heading>
		</Box>
	);
};