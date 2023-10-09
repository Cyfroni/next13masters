import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ActiveLink } from "../components/activeLink";
import { QuerySeachInput } from "@/components/querySearchInput";
import { executeGraphql } from "@/api/grapgql";
import { CartCreateDocument } from "@/gql/graphql";
import { AddCartButton } from "@/components/addCartButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const createCart = async () => {
		"use server";
		console.log("createCarttaa");
		await executeGraphql({ query: CartCreateDocument, cache: "no-store" });
	};

	return (
		<html lang="en">
			<body className={inter.className}>
				<header className="flex bg-teal-400 px-72">
					<nav>
						<ul className="flex">
							<li className="p-5 transition-colors hover:bg-teal-300">
								<ActiveLink href="/">Home</ActiveLink>
							</li>
							<li className="p-5 transition-colors hover:bg-teal-300">
								<ActiveLink href="/products">All</ActiveLink>
							</li>
							<li className="p-5 transition-colors hover:bg-teal-300">
								<ActiveLink href="/collections/summer-vibes">Summer Vibes</ActiveLink>
							</li>
							<li className="p-5 transition-colors hover:bg-teal-300">
								<ActiveLink href="/categories/t-shirts/1">T-Shirts</ActiveLink>
							</li>
							<li className="p-5 transition-colors hover:bg-teal-300">
								<ActiveLink href="/categories/accessories/1">Accessories</ActiveLink>
							</li>
						</ul>
					</nav>
					<div className="ml-auto flex items-center">
						<QuerySeachInput />
					</div>
					<form action={createCart} className="ml-10 flex items-center">
						<AddCartButton />
					</form>
					{/* <AddCartForm /> */}
				</header>
				<main className="flex min-h-screen items-center justify-center">{children}</main>
			</body>
		</html>
	);
}
