import { getProductById } from "@/app/api";

export async function generateMetadata({ params }: { params: { id: string } }) {
	const product = await getProductById(params.id);

	return {
		title: product.title,
	};
}

export default async function Page({ params }: { params: { id: string } }) {
	const product = await getProductById(params.id);

	return (
		<article className="flex max-w-3xl">
			<img className="h-80 w-80" src={product.image} alt={product.title} />
			<div>
				<h1 className="text-xl font-bold">{product.title}</h1>
				<p className="text-gray-500">{product.longDescription}</p>
				<p className="text-gray-500">{product.price}</p>
			</div>
		</article>
	);
}
