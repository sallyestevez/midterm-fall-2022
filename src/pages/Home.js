import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { GEOLOCATION_API_KEY } from "../API_KEYS";
import InfoCard from '../components/InfoCard';

function Home() {
  const [astronomyData, setAstronomyData] = useState({});
  const lat = document.getElementById("latitude");
  const long = document.getElementById("longitude");
  const URL = `https://api.ipgeolocation.io/astronomy?apiKey=${GEOLOCATION_API_KEY}&lat=-27.4748&long=153.017`;

  useEffect (() => {
    axios
    .get(URL)
    .then(function(response) {
      console.log('response', response);
      setAstronomyData(response.data);
    })
    .catch(function(error) {
      console.warn('error', error);
      setAstronomyData([]);
    });
}, []);

  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("latitude", lat);
    console.log("longitude", long)
  });

const { date, day_length, latitude, longitude, moonrise, moonset, sunrise, sunset } = useMemo(() => {
  const astronomyMain = astronomyData.main || {};
  return {
    date: astronomyData.date,
    day_length: astronomyData.day_length,
    latitude: lat,
    longitude: long,
    moonrise: astronomyData.moonrise,
    moonset: astronomyData.moonset,
    sunrise: astronomyData.sunrise,
    sunset: astronomyData.sunset,
  };
}, [astronomyData]);

  console.log("astronomyData", astronomyData);
  console.log("sunrise", sunrise);
  console.log("sunset", sunset);

  return (
    <div className="App">
      <InfoCard
        date={date}
        day_length={day_length}
        latitude={latitude}
        longitude={longitude}
        moonrise={moonrise}
        moonset={moonset}
        sunrise={sunrise}
        sunset={sunset}
      />
    </div>
  );
};

export default Home;