import { Button } from '@material-ui/core';
import ReactPlayer from "react-player";

export default function Music() {
    useEffect(() => {
        document.querySelector(".react-player__preview .MuiButtonBase-root").click()
    }, [])
    return (
        <div className="music">
       <ReactPlayer
  url="https://www.youtube.com/watch?v=aiyaosxx13A"
  width="0"
  height="0"
  playing={true}
  playIcon={<Button variant="contained" color="secondary">Play</Button>}
  light="#ccc"
  style={{marginLeft: '20px',display: 'block'}}
/></div>
    )
}
