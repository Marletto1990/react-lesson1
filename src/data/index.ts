type TData = {
	name: string;
	price: number;
	discount: number;
	wight: string;
	description: string;
	isFavorite: boolean;
	isCart: boolean;
	available: boolean;
	stock: number;
	pictures: string;
};

const data: TData[] = [
	{
		name: 'Желудки утиные сушено-вяленые',
		price: 550,
		discount: 15,
		wight: '100 г',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		isFavorite: false,
		isCart: false,
		available: true,
		stock: 10,
		pictures: 'https://react-learning.ru/image-compressed/1.jpg',
	},
	{
		name: 'Куриные желудочки для собак',
		price: 450,
		discount: 10,
		wight: '100 г',
		description: 'Описание demo',
		isFavorite: false,
		isCart: false,
		available: true,
		stock: 10,
		pictures: 'https://react-learning.ru/image-compressed/2.jpg',
	},
	{
		name: 'Крупная говяжья сушено-вяленая жилка',
		price: 360,
		discount: 0,
		wight: '100 г',
		description:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
		isFavorite: false,
		isCart: false,
		available: true,
		stock: 10,
		pictures: 'https://react-learning.ru/image-compressed/3.jpg',
	},
	{
		name: 'Мелкая говяжья сушено-вяленая жилка',
		price: 300,
		discount: 0,
		wight: '100 г',
		description:
			'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
		isFavorite: false,
		isCart: false,
		available: true,
		stock: 10,
		pictures: 'https://react-learning.ru/image-compressed/4.jpg',
	},
	{
		name: 'Калтык говяжий для собак',
		price: 290,
		discount: 0,
		wight: '100 г',
		description: 'Описание demo',
		isFavorite: false,
		isCart: false,
		available: true,
		stock: 10,
		pictures: 'https://react-learning.ru/image-compressed/5.jpg',
	},
	{
		name: 'Бублик из бычьего корня',
		price: 340,
		discount: 0,
		wight: '100 г',
		description: 'Описание demo',
		isFavorite: false,
		isCart: false,
		available: true,
		stock: 10,
		pictures: 'https://react-learning.ru/image-compressed/6.jpg',
	},
	{
		name: 'Копыто оленье',
		price: 490,
		discount: 0,
		wight: '1 шт',
		description: 'Описание demo',
		isFavorite: false,
		isCart: false,
		available: true,
		stock: 10,
		pictures: 'https://react-learning.ru/image-compressed/7.jpg',
	},
	{
		name: 'Бараний рубец сушенный',
		price: 330,
		discount: 0,
		wight: '100 г',
		description: 'Описание demo',
		isFavorite: false,
		isCart: false,
		available: true,
		stock: 10,
		pictures: 'https://react-learning.ru/image-compressed/8.jpg',
	},
	{
		name: 'Рубец говяжий для собак',
		price: 290,
		discount: 0,
		wight: '100 г',
		description: 'Описание demo',
		isFavorite: false,
		isCart: false,
		available: true,
		stock: 10,
		pictures: 'https://react-learning.ru/image-compressed/9.jpg',
	},
	{
		name: 'Свиные уши для собак',
		price: 330,
		discount: 0,
		wight: '100 г',
		description: 'Описание demo',
		isFavorite: false,
		isCart: false,
		available: true,
		stock: 10,
		pictures: 'https://react-learning.ru/image-compressed/10.jpg',
	},
	{
		name: 'Уши говяжьи для собак',
		price: 330,
		discount: 0,
		wight: '100 г',
		description: 'Описание demo',
		isFavorite: false,
		isCart: false,
		available: true,
		stock: 10,
		pictures: 'https://react-learning.ru/image-compressed/11.jpg',
	},
	{
		name: 'Печенья с яблоком (печень говяжья, сердце)',
		price: 340,
		discount: 0,
		wight: '14 шт',
		description: 'Описание demo',
		isFavorite: false,
		isCart: false,
		available: true,
		stock: 10,
		pictures: 'https://react-learning.ru/image-compressed/12.jpg',
	},
	{
		name: 'Рога оленя для собак весом до 3кг. Размер XS',
		price: 350,
		discount: 14,
		wight: '1 шт',
		description: 'Описание demo',
		isFavorite: false,
		isCart: false,
		available: true,
		stock: 10,
		pictures: 'https://react-learning.ru/image-compressed/13.jpg',
	},
	{
		name: 'Рога оленя для собак весом от 3 до 5 кг. Размер S',
		price: 400,
		discount: 0,
		wight: '1 шт',
		description: 'Описание demo',
		isFavorite: false,
		isCart: false,
		available: true,
		stock: 10,
		pictures: 'https://react-learning.ru/image-compressed/14.jpg',
	},
	{
		name: 'Рога оленя для собак весом от 5 до 10 кг. Размер M',
		price: 600,
		discount: 0,
		wight: '1 шт',
		description: 'Описание demo',
		isFavorite: false,
		isCart: false,
		available: true,
		stock: 10,
		pictures: 'https://react-learning.ru/image-compressed/15.jpg',
	},
	{
		name: 'Рога оленя для собак весом от 10 до 30 кг. Размер L',
		price: 800,
		discount: 0,
		wight: '1 шт',
		description: 'Описание demo',
		isFavorite: false,
		isCart: false,
		available: true,
		stock: 10,
		pictures: 'https://react-learning.ru/image-compressed/16.jpg',
	},
];

const dataPromise: Promise<TData[]> = new Promise((resolve) =>
	setTimeout(() => {
		resolve(data);
	}, 300)
);

export { dataPromise };
export type { TData };
