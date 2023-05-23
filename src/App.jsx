import AffiliateList from './components/AffiliateList';
import Header from './components/Header';

const AFFILIATES1 = [];

const AFFILIATES = [
	{
		nombre: 'Walter José',
		apellido: 'Serra',
		afiliado: true,
		activo: true,
		legajo: 3294216,
		dni: 20032095,
		telpart: 2364601322,
		teltrab: 23624407171,
		telvirt: 47171
	},
	{
		nombre: 'Ricardo Esteban',
		apellido: 'Francescutti',
		afiliado: true,
		activo: false,
		legajo: 3119130,
		dni: 20032095,
		telpart: 2364601322,
		teltrab: 23624407171,
		telvirt: 47171
	},
	{
		nombre: 'Enrique Mauricio',
		apellido: 'Varela',
		afiliado: false,
		activo: true,
		legajo: 3023023,
		dni: 20032095,
		telpart: 2364601322,
		teltrab: 23624407171,
		telvirt: 47171
	}
];

const lenguaje = 'ReactJS';

const App = () => (
	<>
		<Header />
		<AffiliateList affiliates={AFFILIATES} />
		<p>Aplicación desarrollada en {lenguaje}</p>
	</>
);

export default App;
