import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "../Link";
import { Link as SmoothLink } from "react-scroll";

export const NavMenu = () => {
	const [isActive, setIsActive] = useState<string>("Home");
	const { onClose } = useDisclosure();
	const navigate = useNavigate();
	const location = useLocation();

	const handleClick = (path: string, pageName: string) => {
		if (path) navigate(path);
		setIsActive(pageName);
		onClose();
	};

	useEffect(() => {
		if (location.pathname.includes("projects")) setIsActive("Projetos");
	}, [location.pathname]);

	return (
		<>
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
		</>
	);
};
