import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import ReactPlayer from "react-player";

export default function Music() {
    return (
       <ReactPlayer
  url="https://www.youtube.com/watch?v=aiyaosxx13A"
  width="0"
  height="0"
  playing
  playIcon={<Button variant="contained" color="secondary">Play</Button>}
  light="#ccc"
/>
    )
}
