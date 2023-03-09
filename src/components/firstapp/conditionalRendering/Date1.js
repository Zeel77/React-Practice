import React from "react";

function Date1() {
    let dateNTime = new Date();
    let currDate = dateNTime.getDate(dateNTime)
    return ( 
        <>
            Date: {currDate}
            <br />
        </>
     );
}

export default Date1;