
export function loadValue(value) {
    return { type: 'INITIAL_STATE', value }
}
export function canIncrementer() {
    return { type: 'CAN_INCREMENT' }
}
export function setDoorNo(value) {
    return { type: 'SET_DOOR_NO',value }
}
export function setLandmark(value) {
    return { type: 'SET_LANDMARK',value }
}
export function setFloor(value) {
    return { type: 'SET_FLOOR',value }
}
export function setLiftAvailability(value) {
    return { type: 'SET_LIFT_AVAILABILITY',value }
}

export function canDecrementer() {
    return { type: 'CAN_DECREMENT' }
}
export function searchOnFocus() {
    return { type: 'SEARCH_ONFOCUS' }
}
export function clearSearch() {
    return { type: 'CLEAR_SEARCH' }
}
export function emergencyChange() {
    return { type: 'EMERGENCY_CHANGE' }
}

export function isLoading(mIsLoading) {
    return { type: 'ISLOADING',
            isloading: mIsLoading
    }
}

export function counterFetchingSucess(value) {
    return { type: 'COUNTERSUCESS',
            isLoading: false,
            value: value
    }
}

function reverseGeoCodeTrigger(responseJson) {
    return {
        type: 'GEOCODE_ADDRESS',
        address: responseJson
    }
}

export function currentLocationUpdate(value) {
    // debugger;
    if (value) {
        return { type: 'CURRENT_LOCATION',
            latitude: value.latitude,
            longitude: value.longitude
        }
    } else {
        return { type: 'NA'};
    }
}

export function reverseGeoCode(lat = 14.8911134, lng = 76.8801239) {
    return (dispatch) => {
        fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + lat + ',' + lng + '&key=' + constants.API_KEY)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('Address ->' + JSON.stringify(responseJson));
            dispatch(reverseGeoCodeTrigger(responseJson));
        })
    };
}

 export function initialLoad() {
    return (dispatch) => {
        fetch("http://ec2-13-127-170-233.ap-south-1.compute.amazonaws.com/api/v1/cans")
            .then((response) => {
               
                console.log('response', response);
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json()
                // return response;
            })
            .then((value) => {
                return  dispatch(loadValue(value))
            })
            .catch((error) => {
                console.log('errorx', error);
            });
    };
} 
