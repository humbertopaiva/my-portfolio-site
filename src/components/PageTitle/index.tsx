import { Box, Heading, Text } from "@chakra-ui/react";
import { FullWidthContainer } from "../FullWidthContainer";

interface PageTitleProps {
	page: string;
	title: string;
}

export const PageTitle = ({ page, title }: PageTitleProps) => {
	return (
		<FullWidthContainer>
			<Box pt={12} mt={12}>
				<Text
					color="gray.500"
					fontFamily={"Source Code Pro, monospace"}
					fontSize={"lg"}
				>
					// {page}
				</Text>
				<Heading
					as="h2"
					fontSize={["5xl"]}
					fontWeight="700"
					color="cyan.500"
					mb={10}
				>
					{title}
				</Heading>
			</Box>
		</FullWidthContainer>
	);
};
