function Product({ product }: { product: Product }) {
	return (
		<li className="flex flex-col items-center justify-center">
			<img className="h-48 w-48" src={product.image} alt={product.title} />
			<h3 className="text-xl font-bold">{product.title}</h3>
			<p className="text-gray-500">{product.description}</p>
			<p className="text-gray-500">{product.price}</p>
		</li>
	);
}

type Product = {
	title: string;
	description: string;
	price: string;
	image: string;
};

export default function Home() {
	return (
		<main className="flex min-h-screen items-center">
			<ul data-testid="products-list" className="mx-auto flex gap-5">
				<Product
					product={{
						title: "Product 1",
						description: "Description 1",
						price: "Price 1",
						image: "https://via.placeholder.com/150",
					}}
				/>
				<Product
					product={{
						title: "Product 2",
						description: "Description 2",
						price: "Price 2",
						image: "https://via.placeholder.com/150",
					}}
				/>
				<Product
					product={{
						title: "Product 3",
						description: "Description 3",
						price: "Price 3",
						image: "https://via.placeholder.com/150",
					}}
				/>
				<Product
					product={{
						title: "Product 4",
						description: "Description 4",
						price: "Price 4",
						image: "https://via.placeholder.com/150",
					}}
				/>
			</ul>
		</main>
	);
}
