import { ChangeEvent, useRef } from 'react';

export const SearchBar = () => {
	const debounceRef = useRef<NodeJS.Timeout>();

	const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (debounceRef.current) {
			clearTimeout(debounceRef.current);
		}
		debounceRef.current = setTimeout(() => {
			console.log('debounce', event.target.value);
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
		</div>
	);
};
