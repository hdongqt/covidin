import React, { useEffect } from 'react'
import Audio from './music.mp3';
import {Howl, Howler} from 'howler';
import { Button } from '@material-ui/core';
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
        <div className="music">
          <iframe src='https://www.youtube.com/embed/aiyaosxx13A?autoplay=01&mute=1'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
/>
        </div>
    )
}
