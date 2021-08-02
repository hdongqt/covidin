import React from 'react'
import Anime from './music.mp3';
import {Howl, Howler} from 'howler';
const autoPlay =  {sound : Anime, label: "wow"};

export default function index() {
    soundPlay = (src) =>{
        const sound = new Howl({ src });   
        sound.play()
    }
    return (
         Howler.volume(1.0)  
        <div>
            <Button onClick={()=>soundPlay(autoPlay.sound)}>{autoPlay.label}</Button>
        </div>
    )
}
