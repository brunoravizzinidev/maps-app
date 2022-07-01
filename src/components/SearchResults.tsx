import { useContext } from 'react';
import { PlacesContext } from '../context';

export const SearchResults = () => {
	const { places, isLoadingPlaces } = useContext(PlacesContext);

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
					className="list-group-item list-group-item-action"
					key={place.id}
				>
					<h6>{place.text_es}</h6>
					<p className="text-muted" style={{ fontSize: '12px' }}>
						{place.place_name_es}
					</p>
					<button className="btn btn-sm btn-outline-primary">
						Direcciones
					</button>
				</li>
			))}
		</ul>
	);
};
