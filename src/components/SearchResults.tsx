import { useContext, useState } from 'react';
import { PlacesContext, MapContext } from '../context';
import { Feature } from '../interfaces/places';

export const SearchResults = () => {
	const { places, isLoadingPlaces } = useContext(PlacesContext);

	const { map } = useContext(MapContext);

	const [activeId, setActiveId] = useState('');

	const onPlaceClick = (place: Feature) => {
		const [lng, lat] = place.center;
		setActiveId(place.id);
		map?.flyTo({
			zoom: 14,
			center: [lng, lat],
		});
	};

	if (isLoadingPlaces) {
		return (
			<div className="alert alert-primary mt-2">
				<h6>Buscando...</h6>
			</div>
		);
	}

	if (places.length === 0) {
		return <></>;
	}

	return (
		<ul className="list-group mt-3">
			{places.map((place) => (
				<li
					className={`list-group-item list-group-item-action pointer ${
						activeId === place.id ? 'active' : ''
					}`}
					key={place.id}
					onClick={() => onPlaceClick(place)}
				>
					<h6>{place.text_es}</h6>
					<p style={{ fontSize: '12px' }}>{place.place_name_es}</p>
					<button
						className={`btn btn-sm ${
							activeId === place.id
								? 'btn-outline-light'
								: 'btn-outline-primary'
						}`}
					>
						Ver Ruta
					</button>
				</li>
			))}
		</ul>
	);
};
