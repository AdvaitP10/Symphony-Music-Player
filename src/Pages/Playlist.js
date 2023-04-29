import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PlaylistCard from "../components/PlaylistCard";
import "../App.css";

export default function Playlist() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/playlist")
      .then((res) => res.json())
      .then((data) => setSongs(data));
  }, []);

  const playlistDelete = async (id) => {
    await fetch("http://localhost:8000/playlist/" + id, {
      method: "DELETE",
    });

    const newSongs = songs.filter((song) => song.id !== id);
    setSongs(newSongs);
  };

  const play1 = async (titleAdd, singerAdd, imageAdd) => {
    await fetch("http://localhost:8000/play", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ titleAdd, singerAdd, imageAdd }),
    });
  };

  return (
    <div className="App">
      <Grid container spacing={2} sx={{ paddingTop: 8, paddingBottom: 70 }}>
        {songs.map((song) => (
          <Grid item key={song.id} lg={4} md={6} xs={12}>
            <PlaylistCard
              song={song}
              playlistDelete={playlistDelete}
              play1={play1}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
