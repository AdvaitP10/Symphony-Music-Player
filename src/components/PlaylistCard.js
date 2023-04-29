import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../App.css";
import { Delete } from "@mui/icons-material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function PlaylistCard({ song, playlistDelete, play1 }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="cover pic"
          height="180"
          image={song.imageAdd}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {song.titleAdd}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            by {song.singerAdd}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => {
              play1(song.titleAdd, song.singerAdd, song.imageAdd);
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
              playlistDelete(song.id);
            }}
          >
            <Delete sx={{ paddingRight: 1 }} />
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
