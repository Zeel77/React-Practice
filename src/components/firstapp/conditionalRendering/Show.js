import React,{useState} from "react";
import Date1 from "./Date1";
import Time1 from "./Time1";

function Show() {
    const [mode, setMode] = useState(0);

    return (  
        <>
            <button onClick={()=>{
                setMode(0)
            }}>Show Date</button>
            <button onClick={() => {
                setMode(1)
            }}>Show Time</button>
            <br />
            {(mode === 0)? <Date1/> : <Time1/>}


        </>
    );
}

export default Show;