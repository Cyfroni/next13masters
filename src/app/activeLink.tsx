"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ComponentProps } from "react";

export function ActiveLink({
	children,
	href,
}: {
	children: React.ReactNode;
	href: ComponentProps<typeof Link>["href"];
}) {
	const pathname = usePathname();

	const active = href === "/" ? pathname === href : pathname.startsWith(href);

	return (
		<Link href={href} className={active ? "border-b border-red-400" : ""}>
			{children}
		</Link>
	);
}
