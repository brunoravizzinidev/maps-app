/* eslint import/no-webpack-loader-syntax: off */
//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import { Map } from '!mapbox-gl';
import { useContext, useLayoutEffect, useRef } from 'react';
import { PlacesContext, MapContext } from '../context';
import { Loading } from './';

export const MapView = () => {
	const { isLoading, userLocation } = useContext(PlacesContext);
	const { setMap } = useContext(MapContext);
	const mapDiv = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!isLoading) {
			const map = new Map({
				container: mapDiv.current!, // container ID
				style: 'mapbox://styles/mapbox/streets-v11', // style URL
				center: userLocation, // starting position [lng, lat]
				zoom: 14, // starting zoom
				projection: { name: 'globe' }, // display the map as a 3D globe
			});
			setMap(map);
		}
	}, [isLoading]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div
			ref={mapDiv}
			style={{
				// backgroundColor: 'red',
				height: '100vh',
				width: '100vw',
				position: 'fixed',
				top: 0,
				left: 0,
			}}
		></div>
	);
};
