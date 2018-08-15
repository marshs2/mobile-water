import { Navigation } from 'react-native-navigation';


// import App  from '../App';

import BookingModule from '../components/BookingModule/BookingModule';
import UserLocationModule from '../components/UserLocationModule/UserLocationModule';


// register all screens of the app (including internal ones)
export function registerScreens(store, provider) {
  Navigation.registerComponent('BookingModuleScreen', () => BookingModule, store, provider);
  Navigation.registerComponent('UserLocationScreen', () => UserLocationModule, store, provider);
}