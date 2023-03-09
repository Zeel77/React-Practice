import React from "react";
import bgmusic from "./bgmusic.mp3";

function BgMusic() {

    let bgmusic1 = new Audio(bgmusic);

    return ( 
        <>
            <button
            onClick={() => {bgmusic1.play()} }
            >Play Music</button>
            
            <button
            onClick={() => {bgmusic1.pause()}}
            >Pause Music</button>
        </>
     );
}

export default BgMusic;