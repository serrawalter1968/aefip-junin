import style from './AffiliateRow.module.css';

function AffiliateRow({ nombre, apellido, legajo }) {
	return (
		<div className={style.affiliate}>
			<div>{nombre}</div>
			<div>{apellido}</div>
			<div>{legajo}</div>
		</div>
	);
}

export default AffiliateRow;
