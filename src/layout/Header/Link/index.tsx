import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface LinkPropsInterface {
	name?: string;
	children?: ReactJSXElement | string;
	[x: string]: LinkProps | string | (() => void) | undefined;
}

export const Link = ({ children, name, ...rest }: LinkPropsInterface) => {
	//VERIFICA SE UM ELEMENTO FOI PASSADO COMO FILHO
	if (!children) children = name;

	return (
		<ChakraLink
			_hover={{
				color: "cyan.400",
			}}
			{...rest}
		>
			{children}
		</ChakraLink>
	);
};
