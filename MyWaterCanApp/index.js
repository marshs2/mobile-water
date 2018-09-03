import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {masterReducer} from './reducers/CounterReducer';

import { 
  createStore, 
  applyMiddleware 
} from 'redux';

const store = createStore(
  masterReducer,
  applyMiddleware(thunk)
);


// start the app
registerScreens(store, Provider);

Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Book Now',
        screen: 'BookingModuleScreen',
        title: 'Book Can',
        icon: require('./images/water.png'),
        selectedIcon: require('./images/water.png')
      }
    ],
    tabsStyle: {
      tabBarButtonColor: '#929292', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
      tabBarSelectedButtonColor: '#fd8042', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
      tabBarBackgroundColor: '#FFFFFF', // optional, change the background color of the tab bar,
    },
    appStyle: {
      orientation: 'portrait',
      // tabBarHidden: true
    }
});
