import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { AppRoutes } from "./routes/AppRoutes";
import { Header } from "./layout/Header";

export const App = () => (
	<ChakraProvider theme={theme}>
		<Header />
		<AppRoutes />
	</ChakraProvider>
);
