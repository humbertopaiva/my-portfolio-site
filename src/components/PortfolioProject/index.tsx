import { Box, Wrap } from "@chakra-ui/react";
import { PortfolioThumb } from "./PortfolioThumb";

export interface PortfolioProjectProps {
	title: string;
	src: string;
	isEven: boolean;
}

export const PortfolioProject = ({
	title,
	src,
	isEven,
}: PortfolioProjectProps) => {
	return (
		<Wrap justifySelf={{ base: "start", md: "end" }}>
			<PortfolioThumb isEven={isEven} src={src} title={title} />
		</Wrap>
	);
};
