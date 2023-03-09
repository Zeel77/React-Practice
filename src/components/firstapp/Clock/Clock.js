import React, { useState } from "react";


function Clock() {
    let dateNTime = new Date();
    const [time, updatetime] = useState(dateNTime);

    let currDate = dateNTime.getDate();
    // let currTime = dateNTime.toTimeString();
    setInterval(() => {
        updatetime(new Date())
    }, 1000);



    return ( 
    <>
        Date :- {time.getDate()}
        {/* <p>hello</p> */}
        <br />
        <br />
        Time :- {time.toTimeString()}
       

    </> );
}

export default Clock;