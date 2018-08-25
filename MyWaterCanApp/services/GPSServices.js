import {Platform} from 'react-native';
import {requestGPSPermission} from './Permissions';
import Geolocation from 'react-native-geolocation-service';
const config = {
        skipPermissionRequests : false
    };

const geo_options = {
    enableHighAccuracy: true
    };

const currentLocationSuccessAction = null;
 

function geo_success(data){
    debugger;
    currentLocationSuccessAction({latitude:data.coords.latitude,longitude:data.coords.longitude})
    console.log("Got GPS data..... ",data);
}

function geo_failure(err){
    // currentLocationSuccessAction({latitude:null,longitude:null})
    console.log("Error....check :",err);
}
function GPSHandler(){
    // GPS service is used only after getting consent from the USER
   navigator.geolocation.setRNConfiguration(config);
    // Get Current Position from GPS
    Geolocation.getCurrentPosition((data) => {
        debugger;
        currentLocationSuccessAction({latitude:data.coords.latitude,longitude:data.coords.longitude})
        console.log("Got GPS data..... ",data);   
    }, (err) => {
        console.log("Error....check :",err);   
    }, geo_options);
}

export async function getGPSLocation(mCurrentLocationSuccessAction){
    // Calling asynchronous funciton with the success call back
    currentLocationSuccessAction = mCurrentLocationSuccessAction
    let gps = 'granted';
    if (Platform.OS === 'android') {
        gps = await requestGPSPermission();
    }
    if(gps === "granted"){
        GPSHandler();
    }
}