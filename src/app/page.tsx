import { redirect } from "next/navigation";

export default function Home() {
	redirect("/products");
	// return <main className="flex min-h-screen items-center justify-center">Home</main>;
}
