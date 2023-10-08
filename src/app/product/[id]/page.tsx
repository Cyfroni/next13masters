import Image from "next/image";
import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/grapgql";
import { ProductGetByIdDocument } from "@/gql/graphql";

export async function generateMetadata({ params }: { params: { id: string } }) {
	const { product } = await executeGraphql(ProductGetByIdDocument, { id: params.id });

	return {
		title: product?.name,
	};
}

export default async function Page({ params }: { params: { id: string } }) {
	const { product } = await executeGraphql(ProductGetByIdDocument, { id: params.id });

	if (!product) {
		return notFound();
	}

	return (
		<article className="flex max-w-3xl">
			<Image width={320} height={320} src={product?.images[0].url} alt={product.name} />
			<div>
				<h1 className="text-xl font-bold">{product.name}</h1>
				<p className="text-gray-500">{product.categories[0].name}</p>
				<p className="text-gray-500">{product.price}$</p>
				<p className="mt-2 text-gray-500">{product.description}</p>
			</div>
		</article>
	);
}
