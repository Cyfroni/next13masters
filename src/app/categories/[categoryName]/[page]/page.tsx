import { executeGraphql } from "@/api/grapgql";
import { Product } from "@/components/product";
import { ProductsGetListByCategoryDocument } from "@/gql/graphql";

export default async function Page({
	params: { categoryName, page },
}: {
	params: { categoryName: string; page: string };
}) {
	const { categories } = await executeGraphql(ProductsGetListByCategoryDocument, {
		slug: categoryName,
		skip: (parseInt(page) - 1) * 2,
	});

	const products = categories[0]?.products;

	return <ul>{products?.map((product) => <Product key={product.id} product={product} />)}</ul>;
}
