  const initialState = {
    canQuantity: 25,
    canUnit: 'Litres',
    canCount: 2,
    upperBound: 10,
    lowerBound: 2,
    emergency: true,
    searchOnFocus: false,
    currentUserLocation: {latitude:13.0517102 ,longitude:80.1899955,
    doorNo: '',
    landmark: '',
    floorNo: '',
    liftAvailability:false,
    }}

  export function masterReducer(state=initialState, action) {
    switch(action.type) {
      case 'INITIAL_STATE':
        return  {
          canQuantity: action.value.defaultCanOption.quantity,
          canUnit: action.value.defaultCanOption.unit,
          canCount: action.value.defaultCanOption.defaultNumber,
          emergency: action.value.emergencyBooking,
          upperBound: action.value.upperBound,
          lowerBound: action.value.lowerBound,
          searchOnFocus: false,
          currentUserLocation: {latitude:13.0517102 ,longitude:80.1899955,
          doorNo: '',
          landmark: '',
          floorNo: '',
          liftAvailability:false
        }}
      case 'CURRENT_LOCATION':
        return Object.assign({}, state, {
          currentUserLocation: {latitude: action.latitude,longitude: action.longitude}
        })
      case 'SET_DOOR_NO':
        return Object.assign({}, state, {
          doorNo: action.value
        })
      case 'SET_FLOOR':
        return Object.assign({}, state, {
          floorNo: action.value
        })
      case 'SET_LIFT_AVAILABILITY':
        return Object.assign({}, state, {
          liftAvailability: action.value
        })
      case 'SET_LANDMARK':
        return Object.assign({}, state, {
          landmark: action.value
        })

      case 'CAN_INCREMENT':
        let incState = Object.assign({},state);
        if (incState.canCount < incState.upperBound) {
          incState.canCount++;
        }
        return incState;
       case 'CAN_DECREMENT':
        let decState = Object.assign({},state);
        if (decState.canCount > decState.lowerBound) {
          decState.canCount--;
        }
        return decState;
        case 'EMERGENCY_CHANGE':
        return Object.assign({}, state, {
          emergency: !state.emergency
        })
        case 'SEARCH_ONFOCUS':
        return Object.assign({}, state, {
          searchOnFocus: true
        })
        case 'IS_LOADING':
        return action.isloading;
        case 'CLEAR_SEARCH':
        return Object.assign({}, state, {
          searchOnFocus: false
        })
        case 'GEOCODE_ADDRESS':
          return Object.assign({}, state, {
            geocodedAddr: action.responseJson
          });
        

      default:
        return state;
    }
  }
 function canCountHandler(state,action) {
    switch(action.type) {
     case 'CAN_INCREMENT':
        return state + 1
     case 'CAN_DECREMENT':
        return state - 1;
      default:
        return state;
    }
  }
  

 