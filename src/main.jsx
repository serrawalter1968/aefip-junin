import * as ReactDOMClient from 'react-dom/client';
import Header from './componentes/header';
import './index.css';

const lenguaje = 'ReactJS';

const app = (
	<>
		<Header />
		<p>Aplicación desarrollada en {lenguaje}</p>
	</>
);

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(app);
-