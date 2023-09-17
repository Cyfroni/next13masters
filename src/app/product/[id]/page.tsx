import Image from "next/image";
import { notFound } from "next/navigation";
import { executeGraphql } from "@/app/api/grapgql";
import { ProductGetByIdDocument } from "@/gql/graphql";

// export async function generateMetadata({ params }: { params: { id: string } }) {
// 	const product = await getProductById(params.id);

// 	return {
// 		title: product.title,
// 	};
// }

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
				<p className="text-gray-500">{product.description}</p>
				<p className="text-gray-500">{product.price}$</p>
			</div>
		</article>
	);
}
