import axios from 'axios';

const searchApi = axios.create({
	baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
	params: {
		limit: 5,
		language: 'es',
		access_token:
			'pk.eyJ1IjoiYnJhdml6emluaSIsImEiOiJjbDR6emlkdWowc3F2M2VwOWc1OGcweDNuIn0.cXVfEF_mft0AZLF7iW7fBg',
	},
});

export default searchApi;
