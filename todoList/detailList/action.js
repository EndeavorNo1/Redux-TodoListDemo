import { nameSpace} from 'utils/index';
let ns = nameSpace('detailList');
export const ADD_TODO = ns('CHANGE');
export function addTodo(info){
    console.log("action",info)
    return (dispatch, getState)=>{
        
        
       
       
        
       var infoArr=getState().detailList.info;
       
       infoArr=[info,...infoArr];
      // console.log(infoArr);
       

        dispatch({
            type:ADD_TODO,
            info:infoArr
        })
    }
}
