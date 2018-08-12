// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('MyWaterCanApp', () => App);

// import { Navigation } from 'react-native-navigation'; 
// import App from './App';

// Navigation.registerComponent(navigation.playground.WelcomeScreen, () => App);

// Navigation.events().registerAppLaunchedListener(() => {

//     Navigation.setRoot({
//         root: {
//         component: {
//         name: "navigation.playground.WelcomeScreen"
//         }
//         }
//     }) 
// });

import { Navigation } from 'react-native-navigation';

import App from './App';
import UserLocation from './components/UserLocationModule/UserLocation';

// import { registerScreens } from './screens';

// registerScreens(); // this is where you register all of your app's screens

// start the app
  Navigation.registerComponent('App', () => App);
  Navigation.registerComponent('UserLocationScreen', () => UserLocation);

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One',
        screen: 'App',
        title: 'App',
        icon: require('./images/water.png')
      },
      {
        label: 'Two',
        screen: 'UserLocationScreen',
        title: 'User Location',
        icon: require('./images/water.png')
      }
    ]
  });


// this.props.navigator.push({
//     screen: 'Screen1',
//     title: 'Screen 1',
// });