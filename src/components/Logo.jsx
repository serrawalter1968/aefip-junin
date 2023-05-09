import style from './Logo.module.css';

const Logo = ({ ruta }) => {
	return (
		<img
			className={style.logo}
			src={ruta}
			alt='logo'
			width={100}
			height={100}
		/>
	);
};

export default Logo;
