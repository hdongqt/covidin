import React from 'react'
import Anime from './music.mp3';
import {Howl, Howler} from 'howler';
const autoPlay = [
    {sound : Anime, label: "wow"}
]

export default function index() {
    SoundPlay = (src) =>{
        const sound = new Howl({
            src: ['sound.webm', 'sound.mp3']
          });
          
    }
    return (
        <div>
            
        </div>
    )
}
