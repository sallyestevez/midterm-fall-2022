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
                    <h1 class="heading">{time_of_day} data for NYC</h1>
                    <h2 class="date">today's date is {date}</h2>
                    <h3 class="astronomyInfo">the current time is {current_time}</h3>
                    <h3 class="astronomyInfo">the day's length is {day_length}</h3>
                    <h3 class="astronomyInfo">the {time_of_day} will rise at {rise}</h3>
                    <h3 class="astronomyInfo">the {time_of_day} will set at {set}</h3>
                </div>
                <div class="songData">
                    <h1 class="heading">song of the hour</h1>
                    <a href={link}><img class="albumCover" src={photo}></img></a>
                    <h2 class="songTitle">{song_title}</h2>
                    <h3 class="songInfo">on {album}</h3>
                    <h3 class="songInfo">by {artist}</h3>
                    <h3 class="songInfo">running time: {running_time}</h3>
                </div>
            </div>
        </div>
    )
};

export default Info;