import { ActiveLink } from "../activeLink";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<ul className="flex justify-center gap-5 p-5" aria-label="pagination">
				{[1, 2, 3, 4, 5].map((page) => (
					<li
						key={page}
						className="flex h-5 w-5 items-center justify-center rounded-sm bg-slate-200"
					>
						<ActiveLink href={`/products/${page}`}>{page}</ActiveLink>
					</li>
				))}
			</ul>
			{children}
		</div>
	);
}
