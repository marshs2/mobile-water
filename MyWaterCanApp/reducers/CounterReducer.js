  
export function reducer(state=0, action) {
    switch(action.type) {
      case 'INCREMENT':
       return state + 1;
      case 'DECREMENT':
       return state - 1;
       case 'COUNTERSUCESS':
       return action.value.count;
      default:
        return state;
    }
  }

  export function masterReducer(state={}, action) {
    switch(action.type) {
      case 'INITIALSTATE':
      return {
        canQuantity: 30,
        canUnit: 'Litres',
        canCount: 1
      }
      case 'CANINCREMENT':
       return Object.assign({},state,{canCount: canCountHandler(state.canCount,action)});
       case 'CANDECREMENT':
       return Object.assign({},state,{canCount: canCountHandler(state.canCount,action)});             
      default:
        return state;
    }
  }
  export function canCountHandler(state,action) {
    switch(action.type) {
     case 'CANINCREMENT':
        return state + 1
     case 'CANDECREMENT':
        return state - 1;
      default:
        return state;
    }
  }

  export function fetchCounter(state=false,action) {
    switch(action.type) {
     case 'ISLOADING':
        return action.isloading;
     case 'COUNTERSUCESS':
        return false;
      default:
        return state;
    }
  }

  export function testing(state=0, action) {
    switch(action.type) {
      case 'INCREMENT':
       return state + 2;
      case 'DECREMENT':
       return state - 2;
       case 'COUNTERSUCESS':
       return action.value.count;
      default:
        return state
    }
  }

 