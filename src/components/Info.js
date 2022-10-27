import React from "react";
import Header from "../pages/Header";

function Info({
    album,
    artist,
    current_time,
    date,
    day_length,
    genre,
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
            <div className="data">
                <div className="astronomyData">
                    <h1 className="heading">{time_of_day} data for NYC</h1>
                    <img className="sunMoonImage" src="https://i.scdn.co/image/ab67616d0000b2738365a1ab5bec269b4ed36194"></img>
                    <h2 className="date">today's date is {date}</h2>
                    <h3 className="astronomyInfo">the current time is {current_time}</h3>
                    <h3 className="astronomyInfo">the day's length is {day_length}</h3>
                    <h3 className="astronomyInfo">the {time_of_day} will rise at {rise}</h3>
                    <h3 className="astronomyInfo">the {time_of_day} will set at {set}</h3>
                </div>
                <div className="songData">
                    <h1 className="heading">song of the hour</h1>
                    <a href={link}><img className="albumCover" src={photo}></img></a>
                    <h2 className="songTitle">{song_title}</h2>
                    <h3 className="songInfo">on {album}</h3>
                    <h3 className="songInfo">by {artist}</h3>
                    <h3 className="songInfo">running time: {running_time}</h3>
                    <h3 className="songInfo">genre: {genre}</h3>
                </div>
            </div>
        </div>
    )
};

export default Info;