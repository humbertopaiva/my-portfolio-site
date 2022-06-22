import { Heading, Stack } from "@chakra-ui/react";
import { Link } from "./Link";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FullWidthContainer } from "../../components/FullWidthContainer";
import { Link as SmoothLink } from "react-scroll";
import { useEffect, useState } from "react";

export const Header = () => {
	const [isActive, setIsActive] = useState<string>("Home");
	const navigate = useNavigate();
	const location = useLocation();

	const handleClick = (path: string, pageName: string) => {
		if (path) navigate(path);
		setIsActive(pageName);
	};

	useEffect(() => {
		if (location.pathname.includes("projects")) setIsActive("Projetos");
	}, [location.pathname]);

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
				color={"gray.400"}
				textTransform={"uppercase"}
				fontSize={"xs"}
			>
				<Link
					color={isActive === "Home" ? "cyan.600" : "gray.400"}
					onClick={() => {
						handleClick("/", "Home");
					}}
					name="Home"
				/>

				<Link
					color={isActive === "Projetos" ? "cyan.600" : "gray.400"}
					onClick={() => {
						handleClick("/projects", "Projetos");
					}}
					name="Projetos"
				/>

				<Link
					as="div"
					children={
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
					}
				/>
			</Stack>
		</FullWidthContainer>
	);
};
