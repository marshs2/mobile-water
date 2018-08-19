import {Platform} from 'react-native';
import {requestGPSPermission} from './Permissions';
import Geolocation from 'react-native-geolocation-service';
const config = {
        skipPermissionRequests : false
    };

const geo_options = {
    enableHighAccuracy: true
    };
 

function geo_success(data){
    console.log("Got GPS data..... ",data);
}

function geo_failure(err){
    console.log("Error....check :",err);
}
function GPSHandler(){
    // GPS service is used only after getting consent from the USER
   // navigator.geolocation.setRNConfiguration(config);
    // Get Current Position from GPS
    Geolocation.getCurrentPosition(geo_success, geo_failure, geo_options);
}

export async function getGPSLocation(){
    // Calling asynchronous funciton with the success call back
    let gps = 'granted';
    if (Platform.OS === 'android') {
        gps = await requestGPSPermission();
    }
    if(gps === "granted"){
        GPSHandler();
    }
}