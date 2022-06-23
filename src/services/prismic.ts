import * as prismic from "@prismicio/client";

// Fill in your repository name
export const repositoryName = "humbertopaiva-portfolio";

export const client = prismic.createClient(repositoryName, {
	routes: [
		{
			type: "portfolio-article",
			path: "/projects",
		},
	],
});
