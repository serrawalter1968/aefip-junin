import './header.css';
import Logo from './logo';

const empresa = 'AEFIP - Seccional Junín';
const Header = () => {
	return (
		<div className='header'>
			<Logo />
			<h1>{empresa}</h1>
		</div>
	);
};

export default Header;
