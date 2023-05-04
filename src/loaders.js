export const priceLoader = async ({ params }) => {
	const symbol = params.symbol;

	const apiKey = '9AA263D2-B133-45A1-8D20-C46380A342F6';

	return (
		await fetch(
			`http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`
		)
	).json();
};
