import { Navigation } from 'react-native-navigation';


// import App  from '../App';

import BookingModule from '../components/BookingModule/BookingModule';
import UserLocationModule from '../components/UserLocationModule/UserLocationModule';
import AddressRefinement from '../components/AddressRefinementModule/AddressRefinement';
import AgencySelectionModule from '../components/AgencySelectionModule/AgencySelectionModule';
import {screens} from '../constants/constants';


// register all screens of the app (including internal ones)
export function registerScreens(store, provider) {
  Navigation.registerComponent(screens.BOOKINGMODULE, () => BookingModule, store, provider);
  Navigation.registerComponent(screens.USERLOCATION, () => UserLocationModule, store, provider);
  Navigation.registerComponent(screens.ADDRESSREFINEMENT, () => AddressRefinement, store, provider);
  Navigation.registerComponent(screens.AGENCYSELECTIONMODULE, () => AgencySelectionModule, store, provider);
}