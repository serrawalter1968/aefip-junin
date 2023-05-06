import ReactDOM from 'react-dom';
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

ReactDOM.render(app, container);
