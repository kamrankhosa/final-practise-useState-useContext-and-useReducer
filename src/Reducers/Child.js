import React,{useReducer} from 'react';
import MyRducer from "./MyRducer";


function Child(){
    const [state, dispatch] = useReducer(MyRducer, 10);
    return(
        <div>
        Child Value <strong> {state} </strong>
        
        <br />
        <button onClick={()=>dispatch({type:'+'})}>++</button>
        <button onClick={()=>dispatch({type:'-'})}>--</button>
    </div>
    )
}
export default Child;