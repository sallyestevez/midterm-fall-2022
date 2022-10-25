import React, { useMemo } from "react";

function Info({
    album,
    artist,
    current_time,
    date,
    day_length,
    link,
    moonrise,
    moonset,
    photo,
    running_time,
    song_title,
    sunrise,
    sunset
}) {
    return (
        <div class="divContainer">
            <div class="astronomyData">
                <h1>Sun & Moon Data for New York City</h1>
                <h3>Date: {date}</h3>
                <h3>Current Time: {current_time}</h3>
                <h3>Day Length: {day_length}</h3>
                <h3>Moonrise: {moonrise}</h3>
                <h3>Moonset: {moonset}</h3>
                <h3>Sunrise: {sunrise}</h3>
                <h3>Sunset: {sunset}</h3>
            </div>
            <div class="songData">
                <h1>Recommended Song</h1>
                <h3>{song_title}</h3>
                <h3>{album}</h3>
                <h3>{artist}</h3>
                <h3>{photo}</h3>
                <h3>{running_time}</h3>
                <h3>{link}</h3>
            </div>
        </div>
    )
};

export default Info;