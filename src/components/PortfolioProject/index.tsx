import { Box, Wrap } from "@chakra-ui/react";
import { PortfolioThumb } from "./PortfolioThumb";

export interface PortfolioProjectProps {
	uid: string | null;
	type: string;
	title: string;
	src: string;
	isEven: boolean;
}

export const PortfolioProject = ({
	title,
	src,
	isEven,
	uid,
	type,
}: PortfolioProjectProps) => {
	return (
		<Wrap justifySelf={{ base: "start", md: "end" }} w="100%">
			<PortfolioThumb
				uid={uid}
				type={type}
				isEven={isEven}
				src={src}
				title={title}
			/>
		</Wrap>
	);
};
