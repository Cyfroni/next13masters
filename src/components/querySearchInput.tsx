"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function QuerySeachInput() {
	const router = useRouter();
	const [isFocused, setIsFocused] = useState(false);
	const [value, setValue] = useState("");
	const ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (isFocused) {
				// const url = value ? (`/search?query=${value}` as const) : "/";
				// router.push(url);
				router.push(`/search?query=${value}`);
			}
		}, 500);

		return () => clearTimeout(timer);
	}, [value, router, isFocused]);

	return (
		<input
			ref={ref}
			type="search"
			role="searchbox"
			placeholder="Search"
			value={value}
			onChange={(e) => setValue(e.target.value)}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
		/>
	);
}
