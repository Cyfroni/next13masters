import Link from "next/link";
import Image from "next/image";
import { getProducts, type Product } from "@/app/api";

function Product({ product }: { product: Product }) {
	return (
		<li>
			<Link
				href={`/product/${product.id}`}
				className="flex flex-col items-center justify-center rounded-md p-5 transition hover:scale-105 hover:bg-slate-200 hover:shadow-xl"
			>
				<Image width={150} height={150} src={product.image} alt={product.title} />
				<h3 className="text-xl font-bold">{product.title}</h3>
				<p className="text-gray-500">{product.description}</p>
				<p className="text-gray-500">{product.price}$</p>
			</Link>
		</li>
	);
}

export default async function Page({ params }: { params: { page: string } }) {
	const products = await getProducts(parseInt(params.page));

	return (
		<ul data-testid="products-list" className="m-5 grid grid-cols-4 gap-5">
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</ul>
	);
}
