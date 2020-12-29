import React,{useContext} from 'react';
import CounterContext from "./CounterContext";

function Child(){
    let myContext = useContext(CounterContext);
    return(
        <div>
      We are on child page 
      <br />
      value is : 
      <strong>
           {myContext[0]} 
      </strong>
      <br />
      <button onClick={()=>myContext[1](++myContext[0])}>Inrement</button>
      <button onClick={()=>myContext[1](--myContext[0])}>Derement</button>
        </div>
    )

}
export default Child;