import React, { useState } from "react";
import { Grid } from "@mui/material";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

function App() {
  const [videos,setVideos]=useState([]);

  const [selectVideo,setSelectVideo]=useState({id:{}, snippet:{}});

  const handleSubmit = async (searchTerm) => {
    try {
      const {data:{items:videos}}= await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: "AIzaSyAcP35e4NT8m3Xuk9QGqF3yNMlbOaAKQJM",
          q: searchTerm,
        },
      });
      setVideos(videos); 
      setSelectVideo(videos[0]);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <Grid container justifyContent="center" spacing={10}>
      <Grid item xs={12} spacing={10}>
        <SearchBar onSubmit={handleSubmit} />
      </Grid>
      <Grid item xs={8}>
        <VideoDetail video={selectVideo}></VideoDetail>
      </Grid>
      <Grid item xs={4}>
        <VideoList videos={videos} onVideoSelect={setSelectVideo} ></VideoList>
      </Grid>
    </Grid>
  );
}

export default App;
