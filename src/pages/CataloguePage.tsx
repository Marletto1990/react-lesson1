import { useEffect, useState, FC } from 'react';

import { Catalogue, Header } from '../components';
import { TSortBy } from '../components/Sorter';

type TCataloguePageProps = {
	callback: (options: {
		sortBy: TSortBy;
		pagination: number | undefined;
	}) => void;
};

export const CataloguePage: FC<TCataloguePageProps> = ({ callback }) => {
	const [sortBy, setSortBy] = useState<TSortBy>('name');
	const [pagination, setPagination] = useState<number | undefined>(undefined);
	//const { busy, products }

	useEffect(
		() =>
			callback({
				sortBy,
				pagination,
			}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[sortBy, pagination]
	);

	return (
		<>
			<Header
				busy={false}
				onSearch={() => {
					console.log(
						'поиск временно отключен, не смог с ним реализовать контекст'
					);
				}}></Header>
			<Catalogue
				pagination={pagination}
				busy={false}
				count={5}
				products={[]}
				onPressPagination={setPagination}
				onChangeSort={setSortBy}
				total={12}
			/>
		</>
	);
};
