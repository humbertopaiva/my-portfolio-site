import { useParams } from "react-router-dom";
import { Contact } from "../../layout/Contact";
import {
	PrismicRichTextProps,
	usePrismicDocumentByUID,
} from "@prismicio/react";
import { useEffect, useState } from "react";
import { PrismicDocument } from "@prismicio/types";
import { Footer } from "../../layout/Footer";
import { MainContent } from "../../layout/Post/MainContent";
import { PageTitle } from "../../components/PageTitle";

export const Post = () => {
	const { uid } = useParams();
	const [document] = usePrismicDocumentByUID("portfolio-article", uid!);
	const [post, setPost] = useState<PrismicDocument>();

	useEffect(() => {
		if (document) {
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
