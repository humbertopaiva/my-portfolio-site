import { Box, Button, Heading, Link, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FullWidthContainer } from "../../components/FullWidthContainer";
import { Link as SmoothLink, animateScroll as scroll } from "react-scroll";

export const Header = () => {
	const navigate = useNavigate();
	return (
		<FullWidthContainer
			as="header"
			color="gray.50"
			bgColor="gray.800"
			borderBottom="2px solid #191a1b"
		>
			<Heading color={"cyan.400"}>//h</Heading>
			<Stack
				spacing={8}
				direction={"row"}
				align="center"
				letterSpacing={2}
				fontWeight={"lighter"}
				color="gray.500"
				textTransform={"uppercase"}
				fontSize={"xs"}
			>
				<Link
					onClick={() => {
						navigate("/");
					}}
					_hover={{
						color: "cyan.400",
					}}
				>
					Home
				</Link>
				<Link
					onClick={() => {
						navigate("/projects");
					}}
					_hover={{
						color: "cyan.400",
					}}
				>
					Projetos
				</Link>
				<Link
					as="div"
					_hover={{
						color: "cyan.400",
					}}
				>
					<SmoothLink
						activeClass="active"
						to="contact"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						Contato
					</SmoothLink>
				</Link>
			</Stack>
		</FullWidthContainer>
	);
};
