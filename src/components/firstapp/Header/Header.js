import React from "react";
import './Header.css'
import Clock from "../Clock/Clock";
import Toggle from "../Toggle/Toggle";
import BgMusic from "../firstapp/Audio/BgMusic";
import Show from "../conditionalRendering/Show";
// import { ReactDOM } from "react";

function  Header(){
    return <header className="Header">
        <h1>This is Header</h1>
        {/* <Clock /> */}
        <Show />
        <Toggle />
        <BgMusic />
    </header>
}

export default Header;

