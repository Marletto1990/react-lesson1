import { TCatalog } from '../Catalog';
export type TLimitSelect = {
	total: TCatalog['total'];
	limit: TCatalog['limit'];
	onLimitChange: TCatalog['onLimitChange'];
};
