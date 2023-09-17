"use client";

import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ActiveLink<T extends string>({
	children,
	href,
}: {
	children: React.ReactNode;
	href: Route<T>;
}) {
	const pathname = usePathname();

	const active = href === "/" ? pathname === href : pathname.startsWith(href);

	return (
		<Link href={href} className={active ? "border-b border-red-400" : ""}>
			{children}
		</Link>
	);
}
