import Link from "next/link";
import Image from "next/image";
import { type ProductListItemFragment } from "@/gql/graphql";

export function Product({ product }: { product: ProductListItemFragment }) {
	return (
		<li>
			<Link
				href={`/product/${product.id}`}
				className="flex flex-col items-center justify-center rounded-md p-5 transition hover:scale-105 hover:bg-slate-200 hover:shadow-xl"
			>
				<Image width={150} height={150} src={product.images[0].url} alt={product.name} />
				<h3 className="text-xl font-bold">{product.name}</h3>
				<p className="text-gray-500">{product.description}</p>
				<p className="text-gray-500">{product.price}$</p>
			</Link>
		</li>
	);
}
