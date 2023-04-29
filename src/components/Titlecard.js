import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import "../App.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function Titlecard({ song, playlistAdd, play1 }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="cover pic"
          height="180"
          image={song.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {song.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            by {song.singer}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => {
              play1(song.title, song.singer, song.image);
            }}
          >
            <PlayCircleIcon sx={{ paddingRight: 1 }} />
            Play
          </Button>
          <Button
            className="btn"
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => {
              playlistAdd(song.title, song.singer, song.image);
            }}
          >
            <AddIcon sx={{ paddingRight: 1 }} />
            Add to Playlist
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
