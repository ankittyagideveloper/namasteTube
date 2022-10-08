import {
  Container,
  InputAdornment,
  TextField,
  ThemeProvider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import "./Content.css";
import Playlist from "./Playlist";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import { createTheme } from "@mui/material/styles";

//get bookmarked items from localStorage
const theme = createTheme({
  // status: {
  //   danger: "#e53e3e",
  // },
  palette: {
    primary: {
      main: "#FFCC00",
      //  darker: "#053e85",
    },
    // neutral: {
    //   main: "#64748B",
    //   contrastText: "#fff",
    // },
  },
});
const getBookMarks = () => {
  let bookmarks = localStorage.getItem("bookMarks");
  if (bookmarks) {
    return JSON.parse(localStorage.getItem("bookMarks"));
  } else {
    return [];
  }
};

const styles = {
  textField: {
    fontSize: 50,
  },
};
const Content = () => {
  const [vids, setvids] = useState([]);
  const [season2, setSeason2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState();
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("");
  const [season2Url, setseason2Url] = useState("");
  const [bookMark, setBookMark] = useState(getBookMarks());
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    localStorage.setItem("bookMarks", JSON.stringify(bookMark));
  }, [bookMark]);
  const saveBookMark = (e) => {
    if (bookMark.includes(e)) {
      console.info(bookMark, e);
      let newArr = bookMark.filter((curr) => curr !== e);
      setBookMark(newArr);
    } else {
      setBookMark((curr) => [...curr, e]);
    }
  };

  const getData = () => {
    let axiosPlayList1 = axios.get(
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&key=AIzaSyA5S3uU7htP_rqhVWmwNPT6CWGMuDF2hLw"
    );
    let axiosPlayList2 = axios.get(
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX&key=AIzaSyA5S3uU7htP_rqhVWmwNPT6CWGMuDF2hLw"
    );
    axios
      .all([axiosPlayList1, axiosPlayList2])
      .then(([response, response2]) => {
        if (response.data) {
          let { items } = response.data;
          let season2 = response2.data.items;
          setvids(items);
          setSeason2(season2);
          setLoading(false);
          setUrl(
            "https://www.youtube.com/watch?v=" +
              items[0].snippet.resourceId.videoId
          );
          setseason2Url(
            "https://www.youtube.com/watch?v=" +
              season2[0].snippet.resourceId.videoId
          );
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(true);
      });
  };
  const videoControler = (e) => {
    setUrl("https://www.youtube.com/watch?v=" + e);
  };
  const loader = () => {
    return <CircularProgress color="primary" />;
  };
  //GET https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&key=[YOUR_API_KEY] HTTP/1.1
  //AIzaSyA5S3uU7htP_rqhVWmwNPT6CWGMuDF2hLw
  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {loader()}
        </div>
      ) : (
        <Container maxWidth="md">
          {vids.length === 0 ? (
            <h1>No Data Found</h1>
          ) : (
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={url}
                muted={false}
                playing={false}
                controls={true}
                width="100%"
                height="100%"
              />
              {/* )) 
         } */}
            </div>
          )}
          <TextField
            id="outlined-multiline-flexible"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ fontSize: "2rem" }} />
                </InputAdornment>
              ),
            }}
            style={{ marginTop: "100px" }}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            label={false}
            placeholder="Search..."
            variant="standard"
            fullWidth
            sx={{ m: 1 }}
            inputProps={{
              style: { fontSize: 15 },
            }}
          />
          <Playlist
            vidsData={vids.filter((x) =>
              x.snippet.title.toLowerCase().includes(search.toLowerCase())
            )}
            setSelected={(e) => videoControler(e)}
            saveBookMark={(e) => saveBookMark(e)}
            bookMark={bookMark}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>Season 2 Namaste JavaScript</h1>
          </div>
          <Playlist
            vidsData={
              season2 &&
              season2.filter((x) =>
                x.snippet.title.toLowerCase().includes(search.toLowerCase())
              )
            }
            setSelected={(e) => videoControler(e)}
            saveBookMark={(e) => saveBookMark(e)}
            bookMark={bookMark}
          />
        </Container>
      )}
    </ThemeProvider>
  );
};

export default Content;
