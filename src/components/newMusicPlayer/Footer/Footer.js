import "./Footer.css"


import facebookLogo from "./facebook.png"
import githubLogo from "./github.png"
import instagramLogo from "./instagram.png"
import linkedinLogo from "./linkedin.png"
import redditLogo from "./reddit.png"
import twitterLogo from "./twitter.png"
import youtubeLogo from "./youtube.png"

function Footer() {
    return (

        <div className="main">
            
                <h1>FOLLOW ON</h1>
            

            <div className="link">
                <img src={facebookLogo}  alt=""/>
                <img src={githubLogo} alt=""/>
                <img src={instagramLogo} alt=""/>
                <img src={linkedinLogo} alt=""/>
                <img src={redditLogo} alt=""/>
                <img src={twitterLogo} alt="" />
                <img src={youtubeLogo} alt=""/>
            </div>

            <div className="footer-copy">
                <p>
                    &copy; 2023 All Rights Reserved By Jenish Dholariya &#128081;
                </p>
            </div>
        </div>

    )
}

export default Footer;