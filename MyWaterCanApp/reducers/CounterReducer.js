  
  export function masterReducer(state={}, action) {
    switch(action.type) {
      case 'INITIAL_STATE':
        return {
          canQuantity: 25,
          canUnit: 'Litres',
          canCount: 2
        }
      case 'CAN_INCREMENT':
       return Object.assign({},state,{canCount: canCountHandler(state.canCount,action)});
       case 'CAN_DECREMENT':
       return Object.assign({},state,{canCount: canCountHandler(state.canCount,action)});             
      default:
        return state;
    }
  }

 