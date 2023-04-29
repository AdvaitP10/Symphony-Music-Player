import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./Pages/Explore";
import Playlist from "./Pages/Playlist";
import About from "./Pages/About";
import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout";

const theme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#ffa31a",
    },
  },
  typography: {
    fontFamily: "Quicksand",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
