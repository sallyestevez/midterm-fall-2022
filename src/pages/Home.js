import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { GEOLOCATION_API_KEY } from "../API_KEYS";
import Info from '../components/Info';
import SongData from '../components/SongData';

function Home() {
  const [astronomyData, setAstronomyData] = useState({});
  const URL = `https://api.ipgeolocation.io/astronomy?apiKey=${GEOLOCATION_API_KEY}&location=New%York`;
 
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

const { album, artist, current_time, date, day_length, link, moonrise, moonset, photo, running_time, song_title, sunrise, sunset } = useMemo(() => {
  const dt = new Date();
  const hour = dt.getHours();
  console.log(hour);
  const currentSong = SongData[hour];
  return {
    album: currentSong.album,
    artist: currentSong.artist,
    current_time: astronomyData.current_time,
    date: astronomyData.date,
    day_length: astronomyData.day_length,
    link: currentSong.streamingLink,
    moonrise: astronomyData.moonrise,
    moonset: astronomyData.moonset,
    photo: currentSong.art,
    running_time: currentSong.songLength,
    song_title: currentSong.songTitle,
    sunrise: astronomyData.sunrise,
    sunset: astronomyData.sunset,
  };
}, [astronomyData]);

  return (
    <div className="App">
      <Info
        album={album}
        artist={artist}
        current_time={current_time}
        date={date}
        day_length={day_length}
        link={link}
        moonrise={moonrise}
        moonset={moonset}
        photo={photo}
        running_time={running_time}
        song_title={song_title}
        sunrise={sunrise}
        sunset={sunset}
      />
    </div>
  );
};

export default Home;