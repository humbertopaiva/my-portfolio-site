import { Box, Wrap } from "@chakra-ui/react";
import { PortfolioThumb } from "./PortfolioThumb";

export interface PortfolioProjectProps {
	id: string;
	type: string;
	title: string;
	src: string;
	slug?: string | null;
	isEven: boolean;
}

export const PortfolioProject = ({
	title,
	src,
	isEven,
	id,
	type,
	slug,
}: PortfolioProjectProps) => {
	return (
		<Wrap justifySelf={{ base: "start", md: "end" }}>
			<PortfolioThumb
				slug={slug}
				id={id}
				type={type}
				isEven={isEven}
				src={src}
				title={title}
			/>
		</Wrap>
	);
};
