import React, {useState} from "react";
import './Toggle.css';


function Toggle() {
    const [toggle, setToggle] = useState(0);

    function isClick() {
        if(toggle === 1) {
            setToggle(0);
            document.body.style.backgroundColor = "#FFF";
        } else {
            setToggle(1);
            document.body.style.backgroundColor = '#FF0000'
        }
    }
    // let btn_element = document.getElementById("btn");
    // btn_element.addEventListener("click", () => {
    //     isClick()
    // })
    

    return ( 
        <>
            <input type="checkbox" id="switch" onClick={isClick}/><label for="switch">Toggle</label>
            
            
        </>
     );
}

export default Toggle;