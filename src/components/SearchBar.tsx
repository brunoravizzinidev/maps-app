import { ChangeEvent, useRef, useContext } from 'react';
import { PlacesContext } from '../context/';
import { SearchResults } from './SearchResults';

export const SearchBar = () => {
	const { searchPlacesByTerm } = useContext(PlacesContext);

	const debounceRef = useRef<NodeJS.Timeout>();

	const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (debounceRef.current) {
			clearTimeout(debounceRef.current);
		}
		debounceRef.current = setTimeout(() => {
			console.log('debounce', event.target.value);
			searchPlacesByTerm(event.target.value);
		}, 350);
	};

	return (
		<div className="search-container">
			<input
				type="text"
				placeholder="Buscar"
				className="form-control"
				onChange={onQueryChange}
			/>

			<SearchResults />
		</div>
	);
};
