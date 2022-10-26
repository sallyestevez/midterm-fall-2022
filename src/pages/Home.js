import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { GEOLOCATION_API_KEY } from "../API_KEYS";
import Info from '../components/Info';
import SongData from '../components/SongData';

function Home() {
  const [astronomyData, setAstronomyData] = useState({});
  const [sunMoonData, setSunMoonData] = useState("sun");
  const [searchParams] = useSearchParams();
  const URL = `https://api.ipgeolocation.io/astronomy?apiKey=${GEOLOCATION_API_KEY}&location=New%York`;

  useEffect (() => {
    const dataToQuery = searchParams.get("sunMoonData");
    setSunMoonData(dataToQuery);
    axios
    .get(URL)
    .then(function(response) {
      setAstronomyData(response.data);
    })
    .catch(function(error) {
      console.warn('error', error);
      setAstronomyData([]);
    });
}, []);

const { album, artist, current_time, date, day_length, link, photo, rise, running_time, set, song_title, time_of_day } = useMemo(() => {
  const dt = new Date();
  const hour = dt.getHours();
  const currentSong = SongData[hour];

  const sunMoonRise = (searchParams.get("sunMoonData") + "rise");
  const sunMoonSet = (searchParams.get("sunMoonData") + "set");

  return {
    album: currentSong.album,
    artist: currentSong.artist,
    current_time: astronomyData.current_time,
    date: astronomyData.date,
    day_length: astronomyData.day_length,
    link: currentSong.streamingLink,
    rise: astronomyData[sunMoonRise],
    set: astronomyData[sunMoonSet],
    photo: currentSong.art,
    running_time: currentSong.songLength,
    song_title: currentSong.songTitle,
    time_of_day: searchParams.get("sunMoonData")
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
        rise={rise}
        set={set}
        photo={photo}
        running_time={running_time}
        song_title={song_title}
        time_of_day={time_of_day}
      />
    </div>
  );
};

export default Home;