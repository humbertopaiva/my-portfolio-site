import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppRoutes } from "./routes/AppRoutes";
import { Header } from "./layout/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { PrismicProvider } from "@prismicio/react";
import { client } from "./services/prismic";

const theme = extendTheme({
	fonts: {
		heading: `'Anek Latin', sans-serif`,
		body: `'Raleway', sans-serif`,
	},
});

export const App = () => {
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

	return (
		<ChakraProvider theme={theme}>
			<PrismicProvider client={client}>
				<AppRoutes />
			</PrismicProvider>
		</ChakraProvider>
	);
};
