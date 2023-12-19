import { TProductCardType } from "../ProductCard/TProductCardType";
export type TBodyType = {
	busy: boolean,
	products: TProductCardType[],
	pagination: number,
	count: number,
	onPressPagination: (value:number) => void
};