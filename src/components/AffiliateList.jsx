const AffiliateList = ({ affiliates }) => {
	return (
		<div className='affiliates'>
			<h2>Listado de Afiliados</h2>
			<p>{affiliates[0].nombre}</p>
		</div>
	);
};

export default AffiliateList;
