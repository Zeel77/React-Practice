let apiCall = await fetch('https://fakestoreapi.com/products')
let data = await apiCall.json();
console.log(data);
// import React, { useState } from "react";

// import musicDataArray from "../../musicPlayer/music/musicData";
// import forwardbtn from "../../musicPlayer/images/fast-forward.png"
// import backwardbtn from "../../musicPlayer/images/backward-button.png"
// import playbtn from "../../musicPlayer/images/play.svg"
// import pausebtn from "../../musicPlayer/images/pause.svg"
// import "./Player.css";

// function Player() {

//     const [music, setMusic] = useState(musicDataArray[0]);
//     const [flag, setFlag] = useState(0)

//     function playsound() {

//         var sfx = document.getElementById("audioTrackTag");
//         sfx.play();
//     }
//     function pausesound() {
//         var sfx = document.getElementById("audioTrackTag")
//         sfx.pause();
//     }

//     return (
//         <div className="container-1" id="cont">

//             <div className="contain_player">
//                 <img src={music.img} alt="" />
//             </div>
//             <div className="details">
//                 <h3>{music.song_name}</h3>
//                 <span>{music.desc}</span>
//             </div>

//             <div className="btns">
//                 <audio id="audioTrackTag" src={music.song_file} >
//                 </audio>
//                 <br />

//                 <button onClick={() => {
//                     console.log(music);
//                     if (music.index === 1) {
//                         console.log("else");
//                     } else {
//                         setMusic(musicDataArray[music.index - 2])
//                     }

//                     let audioTag = document.getElementById("audioTrackTag")
//                     audioTag.src = music.song_file

//                     let logoImgElement = document.getElementById("play-stop")
//                     logoImgElement.src = playbtn
//                     setFlag(0);

//                 }}><img src={backwardbtn} alt="" />
//                 </button>

//                 <button onClick={() => {
//                     console.log(music);
//                     if (flag === 1) {
//                         setFlag(0)
//                         console.log(flag);
//                         let logoImgElement = document.getElementById("play-stop")
//                         logoImgElement.src = playbtn

//                         pausesound()


//                     } else {
//                         setFlag(1)
//                         console.log(flag)
//                         let logoImgElement = document.getElementById("play-stop")
//                         logoImgElement.src = pausebtn


//                         playsound()
//                     }

//                 }}>
//                     <img id="play-stop" src={playbtn} alt="" />
//                 </button>
//                 <button onClick={() => {
//                     console.log(music);

//                     if (music.index === 11) {
//                         console.log("if");
//                     } else {
//                         setMusic(musicDataArray[music.index])
//                     }

//                     let audioTag = document.getElementById("audioTrackTag")
//                     audioTag.src = music.song_file
//                     let logoImgElement = document.getElementById("play-stop")
//                     logoImgElement.src = playbtn
//                     setFlag(0)
//                 }}>
//                     <img src={forwardbtn} alt="" />
//                 </button>
//                 <button onClick={() => {
//                     document.getElementById("cont").style.display = "none";
//                     pausesound()
//                     setFlag(0)
//                 }}>&#x2716;</button>
//             </div>


//         </div>
//     );
// }

// export default Player;