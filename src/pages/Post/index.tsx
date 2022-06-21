import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Contact } from "../../layout/Contact";
import {
	PrismicRichTextProps,
	usePrismicDocumentByUID,
	useSinglePrismicDocument,
} from "@prismicio/react";
import { useEffect, useState } from "react";
import { PrismicDocument } from "@prismicio/types";
import { Footer } from "../../layout/Footer";

export const Post = () => {
	const { slug } = useParams();
	const [document] = usePrismicDocumentByUID("portfolio-article", slug!);

	const [post, setPost] = useState<PrismicDocument>();

	useEffect(() => {
		if (document) {
			console.log(document);
			setPost(document);
		}
	}, [document]);

	return (
		<>
			<Heading>{post?.data.title[0].text}</Heading>
			<Contact />
			<Footer />
		</>
	);
};
