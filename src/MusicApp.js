import React from "react";
import './MusicApp.css';
// import Home from "./components/musicPlayer/Home/Home";
import SecondPage from "./components/newMusicPlayer/secondpage/SecondPage"
import Header from "./components/newMusicPlayer/Header/Header"
import Footer from "./components/newMusicPlayer/Footer/Footer"


function MusicApp() {
        
    return ( 
        <>
            {/* <Home /> */}
            <Header/>
            <SecondPage />
            <Footer /> 
        </>
     );
}

export default MusicApp;