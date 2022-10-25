import React from "react";

function Header(){
    return (
        <header class="query">
            <h1><a href="/?sunMoonData=Sun">Sun</a></h1>
            <h1><a href="/?sunMoonData=Moon">Moon</a></h1>
        </header>
    )
}

export default Header;