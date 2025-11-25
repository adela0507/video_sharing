import React from "react";
import { Paper,Typography } from "@mui/material";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const {
    id: { videoId },
    snippet: { title, channelTitle, description },
  } = video;


    const videoSrc=`https://www.youtube.com/embed/${videoId}`;
    return(
        <React.Fragment>
            <Paper elevation={6} style={{height:"70%"}}>
                <iframe 
                src={videoSrc} 
                height="100%"
                width="100%"
                title="video Player"
                frameborder="0"></iframe>
            </Paper>
            <Paper elevation={6} style={{padding:"15px"}}>
                <Typography variant="h4">
                    {title}-{channelTitle}
                </Typography>
                <Typography variant="subtitle1">
                    {channelTitle}
                </Typography>
                <Typography variant="subtitle2">
                    {description}
                </Typography>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail;