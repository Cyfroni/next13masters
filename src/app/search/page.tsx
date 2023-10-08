import { executeGraphql } from "@/api/grapgql";
import { Product } from "@/components/product";
import { ProductGetByQueryDocument } from "@/gql/graphql";

export default async function Page({ searchParams }: { searchParams: { query?: string } }) {
	const { products } = await executeGraphql(ProductGetByQueryDocument, {
		query: searchParams.query || "",
	});

	if (products.length === 0) {
		return <div>No products match the criteria</div>;
	}

	return (
		<ul data-testid="products-list" className="m-5 grid grid-cols-4 gap-5">
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</ul>
	);
}
