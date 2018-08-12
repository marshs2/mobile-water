  
  export function masterReducer(state={}, action) {
    switch(action.type) {
      case 'INITIAL_STATE':
        // return {
        //   canQuantity: 25,
        //   canUnit: 'Litres',
        //   canCount: 2,
        //   upperBound: 10,
        //   lowerBound: 2,
        //   emergency: true
        // }
        return  {
          canQuantity: action.value.defaultCanOption.quantity,
          canUnit: action.value.defaultCanOption.unit,
          canCount: action.value.defaultCanOption.defaultNumber,
          emergency: action.value.emergencyBooking,
          upperBound: action.value.upperBound,
          lowerBound: action.value.lowerBound
        }
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
        case 'IS_LOADING':
        return action.isloading;
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

  // export function fetchCounter(state=false,action) {
  //   switch(action.type) {
  //    case 'ISLOADING':
  //       return action.isloading;
  //    case 'COUNTERSUCESS':
  //       return false;
  //     default:
  //       return state;
  //   }
  // }

  // export function testing(state=0, action) {
  //   switch(action.type) {
  //     case 'INCREMENT':
  //      return state + 2;
  //     case 'DECREMENT':
  //      return state - 2;
  //      case 'COUNTERSUCESS':
  //      return action.value.count;
  //     default:
  //       return state
  //   }
  // }

 