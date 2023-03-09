import song_beAMusic from "./Be a Music.mp3"
import song_cartiMangolia from "./Carti mangolia.mp3"
import song_levitating from "./Dua Lipa - Levitating Featuring DaBaby (Official Music Video) (192 kbps).mp3"
import song_amplifier from "./Imran Khan - Amplifier (Official Music Video).mp3"
import song_nightSky from "./Night Sky.mp3"
import song_sunflower from "./Post Malone, Swae Lee - Sunflower (Spider-Man_ Into the Spider-Verse).mp3"
import song_sameBeef from "./Same Beef Song _ BOHEMIA _ Ft. _ Sidhu Moose Wala _ Byg Byrd _ New Punjabi Songs, Punjabi Songs 2022.mp3"
import song_slowDay from "./Slow Day.mp3"
import song_travelLove from "./Travel Love Beats.mp3"
import song_weRollin from "./We Rollin (Official Video) - Shubh _ Rubbal GTR.mp3"
import song_justTheWayYouAre from "./Bruno Mars - Just The Way You Are (Official Music Video).mp3"

import img_chillhop_2 from "../images/chillhop-2.jpg"
import img_chillhop_3 from "../images/chillhop-3.jpg"
import img_levitating from "../images/levitating.jpg"
import img_amplifier from "../images/amplifier.jpg"
import img_chillhop_4 from "../images/chillhop-4.jpg"
import img_sunflower from "../images/sunflower.jpg"
import img_samebeef from "../images/samebeef.jpg"
import img_chillhop from "../images/chillhop.jpg"
import img_werollin from "../images/werollin.jpg"
import img_justthewayyouare from "../images/justthewayyouare.jpeg"

let musics = [song_beAMusic, song_cartiMangolia, song_levitating, song_amplifier, song_nightSky, song_sunflower, song_sameBeef, song_slowDay, song_travelLove, song_weRollin, song_justTheWayYouAre]

let imgs = [img_chillhop_2, img_chillhop_3, img_levitating, img_amplifier, img_chillhop_4, img_sunflower, img_samebeef, img_chillhop, img_chillhop_2, img_werollin, img_justthewayyouare]

let musicNames = ["Be a Music", "Carti mangolia", "Levitating", "Amplifier", "Night Sky", "Sunflower ", "Same Beef", "Slow Day", "Travel Love Beats", "We Rollin", "Just The Way You Are"]

let description = ["music 1", "music 2", "Dua Lipa", "Imran Khan", "music 3", "Post Malone,Swae Lee(Spider-Man_ Into the Spider-Verse)", "_ BOHEMIA _ Ft. _ Sidhu Moose Wala _ Byg Byrd _ New Punjabi Songs","music 3", "music 4","Shubh _ Rubbal GTR","Bruno Mars"]
const musicDataArray = []

for (const i in musics) {
    console.log("i == ", i);
    musicDataArray.push(
        {
            song_file: musics[i],
            length: "4.35m",
            img: imgs[i],
            song_name: musicNames[i],
            index: parseInt(i) + 1,
            desc: description[i]
        }
    )
}

export default musicDataArray