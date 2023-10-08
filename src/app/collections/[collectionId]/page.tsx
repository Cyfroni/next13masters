import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/grapgql";
import { CollectionGetByIdDocument } from "@/gql/graphql";
import { Product } from "@/components/product";

export async function generateMetadata({
	params: { collectionId },
}: {
	params: { collectionId: string };
}) {
	const { collection } = await executeGraphql(CollectionGetByIdDocument, { id: collectionId });

	if (!collection) {
		return notFound();
	}

	const collectionName = collection.name;

	return {
		title: collectionName[0].toUpperCase() + collectionName.slice(1),
	};
}

export default async function Page({
	params: { collectionId },
}: {
	params: { collectionId: string };
}) {
	const { collection } = await executeGraphql(CollectionGetByIdDocument, { id: collectionId });

	if (!collection) {
		return notFound();
	}

	const collectionName = collection.name;

	return (
		<>
			<h1 role="heading">{collectionName[0].toUpperCase() + collectionName.slice(1)}</h1>
			<ul data-testid="products-list">
				{collection.products?.map((product) => <Product key={product.id} product={product} />)}
			</ul>
		</>
	);
}
