import React,{useContext} from 'react';
import Child from "./Child";
import CounterContext from "./CounterContext";

function Parent(){
    const onParent = useContext(CounterContext);
    return(
        <div>
      We are on parent page.
      <br />
      Value here is :  
      <strong> {onParent}</strong>
      <Child></Child>
        </div>
    )

}
export default Parent;