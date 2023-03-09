import React,{useState} from "react";

function Time1() {
    let dateNTime = new Date();
    const [time, setTime] = useState();
    setInterval(()=>{
        setTime(dateNTime)
    },1000);
    return ( 
        <>
        Time: {dateNTime.toTimeString()}
        </>
     );
}

export default Time1;
