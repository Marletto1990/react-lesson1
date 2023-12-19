import { TProductCardType } from "../ProductCard/TProductCardType";
import { TSortByType } from "../Sorter/TSortByType";
export type TBodyType = {
	busy: boolean,
	products: TProductCardType[],
	pagination: number,
	count: number,
	onPressPagination: (value:number) => void,
	onPressSort: (value:TSortByType) => void
};