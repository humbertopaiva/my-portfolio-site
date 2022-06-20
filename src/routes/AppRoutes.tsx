import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../layout/Header";
import { Home } from "../pages/Home";
import { Post } from "../pages/Post";
import { Projects } from "../pages/Projects";

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/projects/:slug" element={<Post />} />
			</Routes>
		</BrowserRouter>
	);
};
