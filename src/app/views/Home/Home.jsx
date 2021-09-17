import { useState, useEffect } from "react"
import VideoCard from "app/components/VideoCard/VideoCard"
import { songsDB, currentSongDB } from "fake-db";

const Home = () => {

  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState({});

  useEffect(() => {
    setSongs(songsDB)
    setCurrentSong(currentSongDB)
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="video">
            <iframe className="w-100" height="360" src={`https://www.youtube.com/embed/${currentSong.id}?start=${currentSong.currentTime}&mute=1&autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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