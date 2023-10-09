"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { createCartMutation } from "@/api/mutations";

export function AddCartButton() {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			className="rounded-xl border bg-slate-300 px-4 py-2 hover:bg-slate-200 disabled:cursor-wait disabled:bg-slate-400"
		>
			Create Cart
		</button>
	);
}

export function AddCartForm() {
	return (
		<form action={createCartMutation} className="ml-10 flex items-center">
			<AddCartButton />
		</form>
	);
}
