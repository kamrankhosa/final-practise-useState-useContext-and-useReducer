import React,{useState} from 'react';
import Parent from "./Stats/Parent";


function App() {
  let [count, setcount] = useState(10);
  return (
    <div> 
     <Parent value={count}></Parent>
     <button onClick={()=>setcount(++count)}>Increment</button>
     <button onClick={()=>setcount(--count)}>Decrement</button>
    </div>
  );
}

export default App;
