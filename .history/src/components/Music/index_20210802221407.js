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
  url="https://vimeo.com/243556536"
  width="202px"
  height="500px"
  playing
  playIcon={<button>sssssssssssss</button>}
  light=""
/>
       </div>
    )
}
