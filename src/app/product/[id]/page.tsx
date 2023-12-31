import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { executeGraphql } from "@/api/grapgql";
import {
	ProductGetByIdDocument,
	ProductsGetListDocument,
	VariantsGetForProductDocument,
} from "@/gql/graphql";
import { Product } from "@/components/product";

export async function generateMetadata({ params }: { params: { id: string } }) {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: params.id },
	});

	return {
		title: product?.name,
	};
}

export async function generateStaticParams() {
	const { products } = await executeGraphql({ query: ProductsGetListDocument });

	return products.map((product) => ({
		params: { id: product.id },
	}));
}

export default async function Page({ params }: { params: { id: string } }) {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: params.id },
	});

	if (!product) {
		return notFound();
	}

	const { productSizeColorVariants } = await executeGraphql({
		query: VariantsGetForProductDocument,
		variables: {
			id: params.id,
		},
	});

	return (
		<div className="max-w-3xl">
			<article className="flex max-w-3xl">
				<Image width={320} height={320} src={product?.images[0].url} alt={product.name} />
				<div>
					<h1 className="text-xl font-bold">{product.name}</h1>
					<p className="text-gray-500">{product.categories[0].name}</p>
					<p className="text-gray-500">{product.price}$</p>
					<p className="mt-2 text-gray-500">{product.description}</p>
					<select>
						{productSizeColorVariants.map((variant) => (
							<option key={variant.id} value={variant.id}>
								{variant.size} {variant.color}
							</option>
						))}
					</select>
				</div>
			</article>
			<Suspense fallback={<div>Loading...</div>}>
				<RelatedProducts />
			</Suspense>
		</div>
	);
}

async function RelatedProducts() {
	const { products } = await executeGraphql({
		query: ProductsGetListDocument,
		variables: { first: 4 },
	});

	return (
		<aside className="flex items-center justify-center">
			<h2 className="text-2xl font-bold">Related Products</h2>
			<div className="flex w-full flex-wrap justify-center">
				<ul data-testid="related-products" className="m-5 grid grid-cols-4 gap-5">
					{products.map((product) => (
						<Product key={product.id} product={product} />
					))}
				</ul>
			</div>
		</aside>
	);
}
