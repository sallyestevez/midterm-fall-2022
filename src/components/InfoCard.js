import React, { useMemo } from "react";

function InfoCard({
    date,
    day_length,
    latitude,
    longitude,
    moonrise,
    moonset,
    sunrise,
    sunset
}) {
    return (
        <div>
            <h1>Hello</h1>
            <h3>Date: {date}</h3>
            <h3>Day Length: {day_length}</h3>
            <h3>Latitude: {latitude}</h3>
            <h3>Longitude: {longitude}</h3>
            <h3>Moonrise: {moonrise}</h3>
            <h3>Moonset: {moonset}</h3>
            <h3>Sunrise: {sunrise}</h3>
            <h3>Sunset: {sunset}</h3>
        </div>
    )
};

export default InfoCard;