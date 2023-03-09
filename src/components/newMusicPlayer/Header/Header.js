import "./Header.css"


import logoLogo from "./logo.png"

function Header() {

    return (

        <div className="header">
            <div className="Logo">
                <img src={logoLogo} alt=""/>
                <h1>MUSIC <span>PLAYER</span> </h1>
            </div>
            <nav>
                <ul>
                    <li>Home &#127968;</li>
                    <li>About &#127928;</li>
                    <li>Like &#128142;</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
