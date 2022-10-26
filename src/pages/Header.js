import React from "react";

function Header(){
    return (
        <header class="query">
            <h1><a href="/?sunMoonData=sun">sun</a></h1>
            <h1><a href="/?sunMoonData=moon">moon</a></h1>
        </header>
    )
}

export default Header;