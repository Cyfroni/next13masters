import { executeGraphql } from "@/api/grapgql";
import { Product } from "@/components/product";
import { ProductsGetListDocument } from "@/gql/graphql";

export default async function Page({ params }: { params: { page: string } }) {
	const { products } = await executeGraphql(ProductsGetListDocument, {
		first: 4,
		skip: parseInt(params.page) * 4,
	});

	return (
		<ul data-testid="products-list" className="m-5 grid grid-cols-4 gap-5">
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</ul>
	);
}
