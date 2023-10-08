import { executeGraphql } from "@/api/grapgql";
import { CollectionGetListDocument } from "@/gql/graphql";
import { ActiveLink } from "@/components/activeLink";

export default async function Layout({ children }: { children: React.ReactNode }) {
	const { collections } = await executeGraphql(CollectionGetListDocument);

	return (
		<div>
			<ul className="flex justify-center gap-5 p-5" aria-label="pagination">
				{collections.map(({ id, name }) => (
					<li key={id} className="flex items-center justify-center rounded-sm bg-slate-200">
						<ActiveLink href={`/collections/${id}`}>{name}</ActiveLink>
					</li>
				))}
			</ul>
			{children}
		</div>
	);
}
