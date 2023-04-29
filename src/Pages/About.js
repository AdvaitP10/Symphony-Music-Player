import React from "react";
import "../App.css";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function About() {
  return (
    <div className="App">
      <img
        src="https://api.insti.app/static/upload/9e3de690-7bb.png"
        alt="Symphony-IITB"
        className="sym"
      />
      <Card sx={{ paddingBottom: 7 }}>
        <CardContent>
          <Typography gutterBottom variant="h2" color="text.secondary">
            About Us:
          </Typography>
          <Typography gutterBottom variant="body1" color="text.secondary">
            Symphony is the Music club of the Indian Institute of Technology,
            Bombay. The club is proud of potraying diverse forms of music
            including fusion, Indian pop and various instrumentals. Over the
            past years there have been bands playing genres ranging from the
            blues, fusion and funk to prog. rock, thrash and metal. We believe
            that the three ingredients for good music are pitch, pocket and
            passion. We believe that music has a deeper meaning which resonates
            with our hearts. We are a large group of people who play/sing or
            listen to good music which isn't genre specific.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
