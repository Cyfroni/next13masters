import { redirect } from "next/navigation";

export default async function Page() {
	redirect("/products/1");
}
