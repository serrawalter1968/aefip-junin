import AffiliateRow from './AffiliateRow';

const AffiliateList = ({ affiliates }) => {
	if (!affiliates.length) return <p>No hay Afiliados ... </p>;

	return affiliates.map(affiliate => (
		<AffiliateRow key={affiliate.legajo} {...affiliate} />
	));
};

export default AffiliateList;
