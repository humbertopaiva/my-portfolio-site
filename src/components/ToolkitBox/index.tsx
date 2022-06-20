import { Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { ToolCard } from "../ToolCard";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import {
	SiJavascript,
	SiTypescript,
	SiRedux,
	SiStyledcomponents,
	SiChakraui,
	SiMaterialui,
	SiTestinglibrary,
} from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";

const minW = "100px";

export const ToolKitBox = () => {
	return (
		<Flex
			direction="column"
			bgGradient="linear(to-tl, gray.300, cyan.400, pink.200)"
			p={6}
			align="center"
			borderRadius={6}
			data-aos="flip-down"
		>
			<Heading
				as="h3"
				fontSize={["3xl"]}
				mb={6}
				fontFamily={"Source Code Pro, monospace"}
				fontWeight="500"
				color="gray.700"
				paddingY={[4, 6]}
			>
				//Hard Skills
			</Heading>

			<Wrap justify={"center"}>
				<WrapItem minW={minW}>
					<ToolCard name="HTML 5" icon={AiFillHtml5} />
				</WrapItem>

				<WrapItem minW={minW}>
					<ToolCard name="CSS3" icon={DiCss3} />
				</WrapItem>

				<WrapItem minW={minW}>
					<ToolCard name="Javascript" icon={SiJavascript} />
				</WrapItem>

				<WrapItem minW={minW}>
					<ToolCard name="Typescript" icon={SiTypescript} />
				</WrapItem>

				<WrapItem minW={minW}>
					<ToolCard name="React JS" icon={DiReact} />
				</WrapItem>

				<WrapItem minW={minW}>
					<ToolCard
						name="Styled-Components"
						icon={SiStyledcomponents}
					/>
				</WrapItem>

				<WrapItem minW={minW}>
					<ToolCard name="Redux" icon={SiRedux} />
				</WrapItem>

				<WrapItem minW={minW}>
					<ToolCard name="Chakra UI" icon={SiChakraui} />
				</WrapItem>

				<WrapItem minW={minW}>
					<ToolCard name="Material UI" icon={SiMaterialui} />
				</WrapItem>

				<WrapItem minW={minW}>
					<ToolCard name="Testing Library" icon={SiTestinglibrary} />
				</WrapItem>

				<WrapItem minW={minW}>
					<ToolCard name="Git" icon={BiGitBranch} />
				</WrapItem>

				<WrapItem minW={minW}>
					<ToolCard name="Github" icon={AiFillGithub} />
				</WrapItem>
			</Wrap>
		</Flex>
	);
};
