import React,{useState} from 'react';
import CounterContext from './ContextApi/CounterContext';
import Parent from './ContextApi/Parent';
function App() {
  let value = useState(10)
  return (
    <CounterContext.Provider value={value}>
      <Parent></Parent>
    </CounterContext.Provider>
  );
}

export default App;
