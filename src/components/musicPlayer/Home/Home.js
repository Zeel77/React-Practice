import React, { useState } from "react";

import './Home.css';

import backbtn from '../images/backward-button.png';
import forwardbtn from '../images/fast-forward.png';

import playbtn from '../images/play.svg'
import pausebtn from '../images/pause.svg';

import musicDataArray from "../music/musicData";

function Home() {

    // const [mode, setmode] = useState(0);
    const [music, setMusic] = useState(musicDataArray[0]);
    const [flag, setFlag] = useState(0)
    console.log(music.index, "index");
    // let flag = 0

    //animation
    const circleBig = document.querySelector("#circle-bg");
    const circleSm = document.querySelector("#circle-sm");

    function startAnimationRing() {
        circleBig.classList.add("animate");
        circleSm.classList.add("animate");
    }

    function stopAnimationRing() {
        circleBig.classList.remove("animate");
        circleSm.classList.remove("animate");
    }

    function playsound() {
    
        var sfx = document.getElementById("audioTrackTag");
       
        sfx.play();
        startAnimationRing()

    }
    function pausesound() {
        var sfx = document.getElementById("audioTrackTag")
        sfx.pause();

        stopAnimationRing()

    }
    

    return (
        <>
            <section id="home">
                <div className="container">
                    <div className="collection">
                <h1 className="heading">Zen Lofi Chillhop</h1>
                <p className="lead">Chill-out is a loosely defined form of popular music characterized by slow tempos and
                    relaxed moods. Identified as a modern type of easy listening.</p>
                    <hr className="hor" />
                    <div id="musicbox" className="musicbox">
                    <h2>Chillhop Playlist</h2>
                    {musicDataArray.map((val,index)=> {
                        return(
                            <>
                                <button className="songBtn" onClick={()=> {
                                    setMusic(musicDataArray[index])
                                    setFlag(0)
                                    let logoImgElement = document.getElementById("play-stop")
                                    logoImgElement.src = playbtn

                                }}> {(index<10)?`0${index}.  ${val.song_name}`: `${index}.  ${val.song_name}`}

                                </button>
                            </>
                        )
                    })}
                </div>
            </div>

                    <div className="playbox">
                        {/* <nav>
                    <ul>
                        <li className="nav-link"><a href="./page/about.html">About & Credits</a></li>
                    </ul>
                </nav> */}
                        <h1 className="heading">WeeTech Lofi Player</h1>
                        <div className="controller">
                            <div id="circle-bg" className="circle">
                                <div id="circle-sm" className="circle2"><img id="cover" src={music.img} alt=" "className="fluid-img" /></div>
                            </div>
                            <div className="songs">
                                <h2 id="song-name">{music.song_name}</h2>
                                <div className="controls">

                                    <audio id="audioTrackTag"   src={music.song_file} >
                                    </audio>
                                    <br />
                                    <button onClick={() => {
                                        console.log(music);
                                        if(music.index === 1) {
                                            console.log("else");
                                        } else {
                                            setMusic(musicDataArray[music.index - 2])
                                        }

                                        let audioTag = document.getElementById("audioTrackTag")
                                        audioTag.src = music.song_file

                                        let logoImgElement = document.getElementById("play-stop")
                                        logoImgElement.src = playbtn
                                        setFlag(0);

                                    }}><img id="backward" className="media-btn" src={backbtn} alt=" "/></button>

                                    <button
                                        onClick={() => {
                                            console.log(music);
                                            if (flag===1 ) {
                                                setFlag(0)
                                                console.log(flag);
                                                let logoImgElement = document.getElementById("play-stop")
                                                logoImgElement.src = playbtn

                                                pausesound()


                                            } else {
                                                setFlag(1)
                                                console.log(flag)
                                                let logoImgElement = document.getElementById("play-stop")
                                                logoImgElement.src = pausebtn

                                                
                                                playsound()
                                            }

                                        }}

                                    ><img id="play-stop" className="media-btn" src={playbtn} alt=" " /></button>



                                    <button onClick={() => {
                                        console.log(music);

                                        if(music.index === 10) {
                                            console.log("if");
                                        } else {
                                            setMusic(musicDataArray[music.index])
                                        }

                                        let audioTag = document.getElementById("audioTrackTag")
                                        audioTag.src = music.song_file
                                        let logoImgElement = document.getElementById("play-stop")
                                        logoImgElement.src = playbtn
                                        setFlag(0)
                                       

                                    }}><img id="forward" className="media-btn" src={forwardbtn} alt=" " /></button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;

