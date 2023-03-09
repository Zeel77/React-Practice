import React, { useEffect, useState } from "react"

import "./SecondPage.css"

import musicDataArray from "../../musicPlayer/music/musicData";
import forwardbtn from "../../musicPlayer/images/fast-forward.png"
import backwardbtn from "../../musicPlayer/images/backward-button.png"
import playbtn from "../../musicPlayer/images/play.svg"
import pausebtn from "../../musicPlayer/images/pause.svg"

import axios from "axios"

import bg from "../image/download.jpeg"
import loaderGif from "../image/gif3.gif"

function SecondPage() {

    const [music, setMusic] = useState(musicDataArray[0]);
    const [flag, setFlag] = useState(0)

    

    // const [inc, setInc] = useState(0)
    // const [dec, setDec] = useState(0)

    const [dataArray, setDataArray] = useState([])
    const [imgBig, setImgBig] = useState([])
    const [loading, setLoading] = useState(false)

    // const [apiData, setapiData] = useState(0);

    useEffect(() => {
        async function getData(dataArray) {
            let rawData = await axios.get("https://63ec53ee31ef61473b209bb4.mockapi.io/data/hh")
            let imgData = await axios.get("https://picsum.photos/300/200")
            axios.all([rawData, imgData]).then(
                axios.spread((...allData) => {
                    const allRawData = allData[0].data
                    const allImgData = allData[1].config.url
                    console.log(allRawData);
                    console.log(allImgData);
                    setDataArray(allRawData)
                    setImgBig(allImgData)
                    setLoading(true)
                })
            )


            // console.log(rawData.data);
            // console.log(imgData);
            // setDataArray(rawData.data)
            // setImgBig(imgData.data);
            // console.log("dataArray == ", dataArray);
        }

        getData()
    }, [])


    function playsound() {

        var sfx = document.getElementById("audioTrackTag");
        sfx.play();
    }
    function pausesound() {
        var sfx = document.getElementById("audioTrackTag")
        sfx.pause();
    }

    return (
        <>

            
            <div className="container">



                {/* <div className="contain" style={{ backgroundImage: `url(${bg})` }}>

                    {dataArray.map((val, index) => {
                        return (
                            <div className="api" key={index}>

                                <div className="apiImg" style={{ backgroundImage: `url(${imgBig})` }}>
                                    <img src={val.avatar} alt="" />
                                </div>
                                <div className="apiData">
                                    <span>{val.name}</span>
                                    <section>ID no: {val.id}</section>
                                    <section>Created Time: {val.createdAt}</section>
                                </div>
                            </div>
                        )
                    })}
                </div> */}
                <div className="infos" style={{backgroundImage: `url(${bg})`}}>
                   
                    <section class="cards-wrapper" >
                        { dataArray.map((val, index)=>{
                            return(
                            <div class="card-grid-space">
                            
                                <div class="card" style={{ backgroundImage: `url(${imgBig})`}} >
                                    
                                    <div className="datas">
                                        
                                        <img src={val.avatar} alt="" />
                                        <h1>{val.name}</h1>
                                        <p>{val.createdAt}</p>
                                        <div class="date">7 Mar 2023</div>
                                        <div class="tags">
                                            <div class="tag">{val.id}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }) }
                        
                       
                       
                        {/* <!-- https://images.unsplash.com/photo-1520839090488-4a6c211e2f94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38951b8650067840307cba514b554ba5&auto=format&fit=crop&w=1350&q=80 --> */}
                    </section>
                </div>

                {/* ----------------------------------------------Music Card ----------------------------------------------- */}
                <div className="section" >

                    {musicDataArray.map((val, index) => {
                        return (
                            <div style={{ display: "contents" }} key={index}>
                                <audio id="audioTrackTag" src={music.song_file} >
                                </audio>
                                <button className="box"
                                    onClick={() => {
                                        document.getElementById("cont").style.display = "flex";
                                        setMusic(musicDataArray[index])

                                        setFlag(1)
                                        console.log(flag);
                                        let logoImgElement = document.getElementById("play-stop")
                                        logoImgElement.src = pausebtn
                                        playsound()

                                    }}>
                                    <img src={val.img} alt="" className="content-img" />
                                    <h2>{val.song_name}</h2>
                                    <p>{val.desc}</p>
                                </button>
                            </div>
                        )
                    })}
                </div>
                {/* ----------------------------------------------player code------------------------------------------------ */}
                <div className="container-1" id="cont">

                    <div className="contain_player">
                        <img src={music.img} alt="" />
                    </div>
                    <div className="details">
                        <h3>{music.song_name}</h3>
                        <span>{music.desc}</span>
                    </div>

                    <div className="btns">
                        <audio id="audioTrackTag" src={music.song_file} >
                        </audio>
                        <br />

                        <button onClick={() => {
                            console.log(music);
                            if (music.index === 1) {
                                console.log("else");
                            } else {
                                setMusic(musicDataArray[music.index - 2])
                            }

                            let audioTag = document.getElementById("audioTrackTag")
                            audioTag.src = music.song_file

                            let logoImgElement = document.getElementById("play-stop")
                            logoImgElement.src = playbtn
                            setFlag(0);

                        }}><img src={backwardbtn} alt="" />
                        </button>

                        <button onClick={() => {
                            console.log(music);
                            if (flag === 1) {
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

                        }}>
                            <img id="play-stop" src={playbtn} alt="" />
                        </button>
                        <button onClick={() => {
                            console.log(music);

                            if (music.index === 11) {
                                console.log("if");
                            } else {
                                setMusic(musicDataArray[music.index])
                            }

                            let audioTag = document.getElementById("audioTrackTag")
                            audioTag.src = music.song_file
                            let logoImgElement = document.getElementById("play-stop")
                            logoImgElement.src = playbtn
                            setFlag(0)
                        }}>
                            <img src={forwardbtn} alt="" />
                        </button>
                        <button onClick={() => {
                            document.getElementById("cont").style.display = "none";
                            pausesound()
                            setFlag(0)
                        }}>&#x2716;</button>
                    </div>


                </div>
            </div>
        </>
    );
}

export default SecondPage;