import React, { useEffect } from 'react'
import Audio from './music.mp3';
import {Howl, Howler} from 'howler';
import { Button } from '@material-ui/core';
import ReactPlayer from "react-player";
const autoPlay =  {sound : Audio, label: "wow"};
export default function Music() {
   const soundPlay = (src) =>{
        const sound = new Howl({ src });   
        console.log(sound)
        sound.play()
    }
    Howler.volume(1.0)  
    useEffect(() => {
        // console.log(autoPlay.sound)
        soundPlay(autoPlay.sound)
    }, [])
    return (
        <div>
       <ReactPlayer
  url="https://www.youtube.com/watch?v=aiyaosxx13A"
  width="100%"
  height="500px"
  playing
  playIcon={<button>Play</button>}
  light="https://i.stack.imgur.com/zw9Iz.png"
/>
       </div>
    )
}
