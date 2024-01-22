import { createRoot } from 'react-dom/client';
import App from './app';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './storage/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
				<ToastContainer theme={'colored'} position={'top-right'} />
			</PersistGate>
		</Provider>
	</StrictMode>
);
