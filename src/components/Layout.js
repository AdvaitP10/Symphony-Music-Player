import { styled, alpha } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import "../App.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import QueueMusicOutlinedIcon from "@mui/icons-material/QueueMusicOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import { useLocation, useNavigate } from "react-router";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const ChildrenTheme = styled("div")({
  background: "#000000",
  width: "100%",
  height: "100%",
});
const DrawerTheme = styled("Drawer")({
  width: 100,
  background: "#121212",
});
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
export default function Layout({ children }) {
  const menu = [
    {
      icon: <HomeOutlinedIcon color="secondary" className="icon" />,
      path: "/",
    },
    {
      icon: <SearchOutlinedIcon color="secondary" className="icon" />,
      path: "/explore",
    },
    {
      icon: <QueueMusicOutlinedIcon color="secondary" className="icon" />,
      path: "/playlist",
    },
    {
      icon: <GroupOutlinedIcon color="secondary" className="icon" />,
      path: "/about",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const [play, setPlay] = useState({});
  useEffect(() => {
    fetch("https://json-server-0e3e.onrender.com/play")
      .then((res) => res.json())
      .then((data) => setPlay(data));
  });

  return (
    <div className="layout1">
      <div className="layout">
        <AppBar>
          <Toolbar>
            <img
              src="https://api.insti.app/static/upload/9e3de690-7bb.png"
              alt="Symphony-IITB"
              className="titleLogo"
              onClick={() => {
                navigate("/");
              }}
            />
            <Typography
              variant="h5"
              component="div"
              color="secondary"
              sx={{ flexGrow: 1 }}
              onClick={() => {
                navigate("/");
              }}
            >
              Symphony
            </Typography>
            <Search sx={{ paddingRight: 1 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <AccountCircleRoundedIcon sx={{ padding: 1 }} />
            <Typography sx={{ padding: 1 }}>User</Typography>
          </Toolbar>
        </AppBar>
        <DrawerTheme
          variant="permanent"
          anchor="left"
          classes={{ paper: { width: 100 } }}
        >
          <div className="space"></div>
          <List>
            {menu.map((item) => (
              <ListItem
                button
                key={item.icon}
                onClick={() => navigate(item.path)}
                sx={
                  location.pathname === item.path
                    ? { bgcolor: "#000000" }
                    : null
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
              </ListItem>
            ))}
          </List>
        </DrawerTheme>
        <ChildrenTheme>{children}</ChildrenTheme>
      </div>
      <footer className="foot" elevation={0}>
        <Card sx={{ display: "flex" }} className="footCard">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h6">
                {play.titleAdd}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                {play.singerAdd}
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === "rtl" ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image={play.imageAdd}
            alt="Live from space album cover"
          />
        </Card>
      </footer>
    </div>
  );
}
