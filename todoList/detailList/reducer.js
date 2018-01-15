import {ADD_TODO} from './action'
const initState={
  info:[]
}


const detailList=(state=initState, action)=>{
    switch (action.type) {
    case ADD_TODO:
      console.log("reducer",action)
       return {
        ...state,
        info:action.info
       }
    default: 
      return state;
  }
}
export default detailList;