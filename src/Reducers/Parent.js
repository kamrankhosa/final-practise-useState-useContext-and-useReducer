import React,{useReducer} from 'react';
import Child from './Child';
import MyRducer from "./MyRducer";


function Parent(){
    const state = useReducer(MyRducer,10);

    return(
        <div>
        Parent Value <strong> {state} </strong>
        <Child></Child>
        
    </div>
    )
}
export default Parent;