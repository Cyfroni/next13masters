import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/grapgql";
import { CollectionGetBySlugDocument } from "@/gql/graphql";
import { Product } from "@/components/product";

export async function generateMetadata({
	params: { collectionName },
}: {
	params: { collectionName: string };
}) {
	const { collections } = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: {
			slug: collectionName,
		},
	});

	if (!collections) {
		return notFound();
	}

	const name = collections[0].name;

	return {
		title: name[0].toUpperCase() + name.slice(1),
	};
}

export default async function Page({
	params: { collectionName },
}: {
	params: { collectionName: string };
}) {
	const { collections } = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: {
			slug: collectionName,
		},
	});

	if (!collections) {
		return notFound();
	}

	const name = collections[0].name;

	return (
		<>
			<h1 role="heading">{name[0].toUpperCase() + name.slice(1)}</h1>
			<ul data-testid="products-list">
				{collections[0].products?.map((product) => <Product key={product.id} product={product} />)}
			</ul>
		</>
	);
}
