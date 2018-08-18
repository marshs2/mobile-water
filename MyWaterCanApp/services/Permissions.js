import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

// GPS permission
export async function requestGPSPermission(){
    try{
        const check = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        )
        if(check){
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': "Water Can App GPS Permission",
                    'message': "Water Can App requires GPS access to deliver water can to accurate location"
                }
            )
            if(granted === PermissionsAndroid.RESULTS.GRANTED){
                console.log("Voila, GPS activated");
                return "granted";
                
            }else{
                console.log("DAMN Humans!");
                return "rejected";
            }

        }
    }catch(err){
        console.warn("Error in obtaining GPS permission");
        return "error";
    }
}


