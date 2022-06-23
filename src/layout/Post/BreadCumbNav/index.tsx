import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { FullWidthContainer } from "../../../components/FullWidthContainer";

export const BreadCumbNav = ({ title }: { title: string }) => {
	return (
		<FullWidthContainer color="gray.200">
			<Breadcrumb>
				<BreadcrumbItem color="gray.300">
					<BreadcrumbLink as={Link} to="/projects">
						Projetos
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage color="gray.500">
					<BreadcrumbLink href="#">{title && title}</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
		</FullWidthContainer>
	);
};
