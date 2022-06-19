import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { AppRoutes } from "./routes/AppRoutes";
import { Header } from "./layout/Header";

import { PrismicProvider } from "@prismicio/react";
import { client } from "./services/prismic";

export const App = () => (
	<ChakraProvider theme={theme}>
		<PrismicProvider client={client}>
			<Header />
			<AppRoutes />
		</PrismicProvider>
	</ChakraProvider>
);
