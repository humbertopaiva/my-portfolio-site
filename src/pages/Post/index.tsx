import { Heading, Box, Image, Link } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Contact } from "../../layout/Contact";
import {
	PrismicRichTextProps,
	usePrismicDocumentByUID,
	PrismicRichText,
} from "@prismicio/react";
import { useEffect, useState } from "react";
import { PrismicDocument } from "@prismicio/types";
import { Footer } from "../../layout/Footer";

import { FullWidthContainer } from "../../components/FullWidthContainer";
import { MainContent } from "../../layout/Post/MainContent";
import { PageTitle } from "../../components/PageTitle";

interface PostProps {
	imageSrc: string;
	title: string;
	text: PrismicRichTextProps;
	webLink: string;
	githubLink: string;
}

export const Post = () => {
	const { uid } = useParams();
	const [document] = usePrismicDocumentByUID("portfolio-article", uid!);

	const [post, setPost] = useState<PrismicDocument>();

	useEffect(() => {
		if (document) {
			console.log(document);
			setPost(document);
		}
	}, [document]);

	return (
		<>
			<PageTitle page="Portfólio" title={post?.data.title[0].text} />
			{post && <MainContent post={post} />}
			<Contact />
			<Footer />
		</>
	);
};
