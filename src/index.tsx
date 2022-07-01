import React from 'react';
import ReactDOM from 'react-dom/client';
import MapsApp from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
	'pk.eyJ1IjoiYnJhdml6emluaSIsImEiOiJjbDR6emlkdWowc3F2M2VwOWc1OGcweDNuIn0.cXVfEF_mft0AZLF7iW7fBg';

if (!navigator.geolocation) {
	alert('tu navegador no tiene geolocalización activada');
	throw new Error('tu navegador no tiene geolocalización activada');
}

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<MapsApp />
	</React.StrictMode>
);
