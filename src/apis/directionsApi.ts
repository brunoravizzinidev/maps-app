import axios from 'axios';

const directionsApi = axios.create({
	baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
	params: {
		alternatives: false,
		overview: 'simplified',
		geometries: 'geojson',
		steps: false,
		access_token:
			'pk.eyJ1IjoiYnJhdml6emluaSIsImEiOiJjbDR6emlkdWowc3F2M2VwOWc1OGcweDNuIn0.cXVfEF_mft0AZLF7iW7fBg',
	},
});

export default directionsApi;
