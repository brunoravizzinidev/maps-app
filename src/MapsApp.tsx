import { PlacesProvider } from './context';
import HomeScreen from './screens/HomeScreen';
import './globalStyles.css';

const MapsApp = () => {
	return (
		<PlacesProvider>
			<HomeScreen />
		</PlacesProvider>
	);
};

export default MapsApp;
