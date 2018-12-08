  const initialState = {
    canQuantity: 20,
    canUnit: 'Litre',
    canCount: 5,
    upperBound: 10,
    lowerBound: 2,
    emergency: true,
    searchOnFocus: false,
    currentUserLocation: {latitude:13.0517102 ,longitude:80.1899955,
    doorNo: '',
    landmark: '',
    floorNo: '',
    liftAvailability:false,
    },
    agencyList: {data:[]},
    viewAgenceyList:{data:[]}
  }

  export function masterReducer(state=initialState, action) {
    switch(action.type) {
      case 'INITIAL_STATE':
        return  {
          canQuantity: action.value.default_can_option.can_type,
          canUnit: action.value.default_can_option.units,
          canCount: action.value.default_can_option.default_value,
          emergency: action.value.emergency_booking,
          upperBound: action.value.upper_bound,
          lowerBound: action.value.lower_bound,
          searchOnFocus: false,
          currentUserLocation: {latitude:13.0517102 ,longitude:80.1899955,
          doorNo: '',
          landmark: '',
          floorNo: '',
          liftAvailability:false,
        },agencyList: {data:[]},
        viewAgenceyList:{data:[]}
      }
      case 'AGENCY_LIST' :
      return Object.assign({}, state, {
        agencyList: {data:action.value.data},
        viewAgenceyList:{data:action.value.data}
      })
      case 'VIEW_AGENCY_LIST' :
      let tempAgencies = state.agencyList.data.filter(value => {
        console.log(value.mobile_no.includes(action.value))
         return value.mobile_no.toLowerCase().includes(action.value.toLowerCase()) || value.agency_name.toLowerCase().includes(action.value.toLowerCase())
      });
      return Object.assign({}, state, {
        viewAgenceyList:{data:tempAgencies}
      })

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
        // case 'IS_LOADING':
        // return action.isloading;
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
  

 