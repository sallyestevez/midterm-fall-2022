import React from "react";
import Header from "../pages/Header";

function Info({
    album,
    artist,
    current_time,
    date,
    day_length,
    link,
    rise,
    set,
    photo,
    running_time,
    song_title,
    time_of_day
}) {
    return (
        <div class="mainContainer">
            <Header />
            <div class="data">
                <div class="astronomyData">
                    <h1 class="heading">{time_of_day} Data for NYC</h1>
                    <h3>Date: {date}</h3>
                    <h3>Current Time: {current_time}</h3>
                    <h3>Day Length: {day_length}</h3>
                    <h3>{time_of_day}rise: {rise}</h3>
                    <h3>{time_of_day}set: {set}</h3>
                </div>
                <div class="songData">
                    <h1 class="heading">Recommended Song</h1>
                    <h2 class="songTitle">{song_title}</h2>
                    <h3 class="songInfo">on {album}</h3>
                    <h3 class="songInfo">by {artist}</h3>
                    <h3 class="songInfo">{running_time}</h3>
                    <a href={link}><img class="albumCover" src={photo}></img></a>
                    <div class="spotifyEmbed">
                    <iframe loading="lazy" src="https://open.spotify.com/embed/track/6m81zUhuw7mVp37OummGgw" width="300" height="80" frameborder="0" data-mce-fragment="1"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Info;