import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Titlecard from "../components/Titlecard";
import "../App.css";

export default function Home() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("https://json-server-0e3e.onrender.com/songs")
      .then((res) => res.json())
      .then((data) => setSongs(data));
  }, []);

  const playlistAdd = async (titleAdd, singerAdd, imageAdd) => {
    await fetch("https://json-server-0e3e.onrender.com/playlist", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ titleAdd, singerAdd, imageAdd }),
    });
  };
  const play1 = async (titleAdd, singerAdd, imageAdd) => {
    await fetch("https://json-server-0e3e.onrender.com/play", {
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
            <Titlecard song={song} playlistAdd={playlistAdd} play1={play1} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
