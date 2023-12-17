import { useEffect, useState } from 'react';
import { Header } from '../components/Header/Header';
import { Body } from '../components/Body/Body';
import { Footer } from '../components/Footer/Footer';
import { TData, dataPromise } from '../data';

const pData = dataPromise;
const App = () => {
	const [busy, setBusy] = useState<boolean>(true);
	const [items, setItems] = useState<TData[]>([]);

	useEffect(() => {
		pData.then((data) => {
			setItems(data)
			setBusy(false)
		});
	}, []);

	return (
		<>
			<Header />
			<Body busy={busy} products={items}/>
			<Footer />
		</>
	);
};

export default App;
