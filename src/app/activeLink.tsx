"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function ActiveLink({ children, href }: { children: React.ReactNode; href: string }) {
	const pathname = usePathname();

	return (
		<Link href={href} className={pathname === href ? "border-b border-red-400" : ""}>
			{children}
		</Link>
	);
}
