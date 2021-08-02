import React, { useEffect } from 'react'
import Audio from './music.mp3';
import {Howl, Howler} from 'howler';
import { Button } from '@material-ui/core';
const autoPlay =  {sound : Audio, label: "wow"};

export default function Music() {
   const soundPlay = (src) =>{
        const sound = new Howl({ src });   
        sound.play()
    }
    Howler.volume(1.0)  
    useEffect(() => {
        soundPlay(autoPlay.sound)
    }, [])
    return (
        <div className="music">
           <Button onClick={()=>{soundPlay(autoPlay.sound)}}></Button>
        </div>
    )
}
