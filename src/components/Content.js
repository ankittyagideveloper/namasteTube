import { Container, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import "./Content.css";
import Playlist from "./Playlist";
import SearchIcon from "@mui/icons-material/Search";

const styles = {
  textField: {
    fontSize: 50,
  },
};
const Content = () => {
  const [vids, setvids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState();
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("");
  const [bookMark, setBookMark] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const saveBookMark = (e) => {
    if (bookMark.includes(e)) {
      console.log(bookMark, e);
      let newArr = bookMark.filter((curr) => curr !== e);
      setBookMark(newArr);
    } else {
      setBookMark((curr) => [...curr, e]);
    }
  };

  const getData = () => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&key=AIzaSyA5S3uU7htP_rqhVWmwNPT6CWGMuDF2hLw"
      )
      .then((response) => {
        console.log(response);
        if (response.data) {
          let { items } = response.data;
          setvids(items);
          setLoading(false);
          setUrl(
            "https://www.youtube.com/watch?v=" +
              items[0].snippet.resourceId.videoId
          );
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  };
  const videoControler = (e) => {
    console.log(e, "hellooooooooooooooooooo");
    setUrl("https://www.youtube.com/watch?v=" + e);
  };

  //GET https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&key=[YOUR_API_KEY] HTTP/1.1
  //AIzaSyA5S3uU7htP_rqhVWmwNPT6CWGMuDF2hLw
  return loading ? (
    <div>loading... </div>
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
        id="outlined-basic"
        label="Search..."
        variant="outlined"
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
    </Container>
  );
};

export default Content;
