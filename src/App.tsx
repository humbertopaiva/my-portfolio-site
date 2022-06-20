import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppRoutes } from "./routes/AppRoutes";
import { Header } from "./layout/Header";

import { PrismicProvider } from "@prismicio/react";
import { client } from "./services/prismic";

const theme = extendTheme({
	fonts: {
		heading: `'Raleway', sans-serif`,
		body: `'Raleway', sans-serif`,
	},
});

export const App = () => (
	<ChakraProvider theme={theme}>
		<PrismicProvider client={client}>
			<AppRoutes />
		</PrismicProvider>
	</ChakraProvider>
);
