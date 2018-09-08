


export function initialLoad(value) {
    return { type: 'INITIAL_STATE', value }
}
export function canIncrementer() {
    return { type: 'CAN_INCREMENT' }
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
/* export function initialLoad() {
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
                 dispatch(loadValue(null));// need to be removed 
            });
    };
} */

// export function bookNow() {
//     return (dispatch) => {
//         // dispatch(isLoading(true));
//         fetch("http://ec2-13-127-170-233.ap-south-1.compute.amazonaws.com/api/v1/getCan")
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }
//                 return response.json()
//                 // return response;
//             })
//             .then((value) => dispatch(counterFetchingSucess(value)))
//             .catch(() => dispatch(isLoading(false)));
//     };
// }
