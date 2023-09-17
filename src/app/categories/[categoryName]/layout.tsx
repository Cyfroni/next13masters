import { ActiveLink } from "@/components/activeLink";

export default function Layout({
	children,
	params: { categoryName },
}: {
	children: React.ReactNode;
	params: { categoryName: string };
}) {
	return (
		<div>
			<ul className="flex justify-center gap-5 p-5" aria-label="pagination">
				{[1, 2, 3, 4, 5].map((page) => (
					<li
						key={page}
						className="flex h-5 w-5 items-center justify-center rounded-sm bg-slate-200"
					>
						<ActiveLink href={`/categories/${categoryName}/${page}`}>{page}</ActiveLink>
					</li>
				))}
			</ul>
			{children}
		</div>
	);
}
