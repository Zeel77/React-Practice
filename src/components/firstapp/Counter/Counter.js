import React,{useState} from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
    function increase() {
        setCounter( counter => counter + 1) 
        
      }
      function decrease() {
        setCounter( counter => counter - 1)
      }
    return ( 
      
        <div id='content'>
        {/* <div>{"Conditional Rendering" && "This may not be visisble" && false}</div> */}
        {/* <button onClick={btnClickFun}>Submit</button> */}
        <h1>Counter: {counter}</h1>
     
        <button className='btn' onClick={increase}>For Increment</button>
        <button className='btn' onClick={decrease}>For Decrement</button>
        </div>
     );
}

export default Counter;