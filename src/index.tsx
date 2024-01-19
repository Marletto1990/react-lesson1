import { createRoot } from 'react-dom/client';
import App from './app';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './storage/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<Provider store={store}>
			<App />
			<ToastContainer theme={'colored'} position={'top-right'} />
		</Provider>
	</StrictMode>
);
