import { useState, useEffect } from "react"
import VideoCard from "app/components/VideoCard/VideoCard"
import { songsDB, currentSongDB } from "fake-db";

const Home = () => {

  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState({});
  const [videoState, setVideoState] = useState({ isMute: 1 })

  useEffect(() => {
    setSongs(songsDB)
    setCurrentSong(currentSongDB)
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (songs[0]) {
        const song = songs[0]
        songs.shift()
        setSongs(songs)
        setCurrentSong(song)
      }
    }, (currentSong.time - currentSong.currentTime + 5) * 1000)
  }, [currentSong])

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="video">
            <iframe className="w-100" height="360" src={`https://www.youtube.com/embed/${currentSong.id}?start=${currentSong.currentTime}&mute=${videoState.isMute}&autoplay=1`}></iframe>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="play-list">
            {
              songs.map((song, index) =>
                <VideoCard
                  key={index}
                  stt={index + 1}
                  name={song.name}
                  suggester={song.suggester}
                  img={song.img}
                />
              )
            }
          </div>
        </div>
      </div>
    </div>



  )
}

export default Home