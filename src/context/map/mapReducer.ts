/* eslint import/no-webpack-loader-syntax: off */
//@ts-ignore

// eslint-disable-next-line import/no-webpack-loader-syntax
import { Map, Marker } from '!mapbox-gl';
import { MapState } from './MapProvider';

type MapAction =
	| {
			type: 'setMap';
			payload: Map;
	  }
	| {
			type: 'setMarkers';
			payload: Marker[];
	  }
	| {
			type: 'setInfo';
			kms: number;
			minutes: number;
	  };

export const MapReducer = (state: MapState, action: MapAction): MapState => {
	switch (action.type) {
		case 'setMap':
			return {
				...state,
				isMapReady: true,
				map: action.payload,
			};

		case 'setMarkers':
			return {
				...state,
				markers: action.payload,
			};

		case 'setInfo':
			return {
				...state,
				kms: action.kms,
				minutes: action.minutes,
			};

		default:
			return state;
	}
};
