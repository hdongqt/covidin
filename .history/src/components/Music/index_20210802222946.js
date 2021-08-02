import { Button } from '@material-ui/core';
import { useEffect } from 'react';
import ReactPlayer from "react-player";

export default function Music() {
    return (
        <div className="music">
       <ReactPlayer
  url="https://www.youtube.com/watch?v=aiyaosxx13A"
  width="0"
  height="0"
  playing={true}
  playIcon={<div variant="contained" color="secondary">Play</div>}
  light="#ccc"
  style={{marginLeft: '20px',display: 'block'}}
/></div>
    )
}
