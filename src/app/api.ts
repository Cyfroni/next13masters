export type Product = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: { rate: number; count: number };
	image: string;
	longDescription: string;
};

export const getProducts = async (page: number): Promise<Product[]> => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=20&offset=${(page - 1) * 20}`,
	);

	return (await res.json()) as Product[];
};

export const getProductById = async (id: string): Promise<Product> => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);

	return (await res.json()) as Product;
};
