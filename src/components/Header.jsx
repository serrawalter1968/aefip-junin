import style from './Header.module.css';
import Logo from './Logo';

const empresa = 'AEFIP - Seccional Junín';
const ruta = '/aefip.jpg';

const Header = () => {
	return (
		<div className={style.header}>
			<Logo ruta={ruta} />
			<h1>{empresa}</h1>
		</div>
	);
};

export default Header;
