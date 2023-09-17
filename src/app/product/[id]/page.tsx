import Image from "next/image";
import { notFound } from "next/navigation";
import { graphql } from "@/gql";
import { executeGraphql } from "@/app/grapgql";

// export async function generateMetadata({ params }: { params: { id: string } }) {
// 	const product = await getProductById(params.id);

// 	return {
// 		title: product.title,
// 	};
// }

const getProductById = graphql(/* GraphQL */ `
	query ProductGetById($id: ID!) {
		product(where: { id: $id }) {
			id
			name
			description
			categories(first: 1) {
				name
			}
			images(first: 1) {
				url
			}
			price
		}
	}
`);

export default async function Page({ params }: { params: { id: string } }) {
	const { product } = await executeGraphql(getProductById, { id: params.id });

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
