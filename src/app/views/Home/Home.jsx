import { useState, useEffect } from "react"
import VideoCard from "app/components/VideoCard/VideoCard"
import { nextVideo, playVideo, deleteVideo } from "app/redux/actions/PlayListActions"
import YouTube from "react-youtube"
import { useDispatch, useSelector } from 'react-redux'
import { VideosReduxSelector, CurrentVideoReduxSelector } from '../../redux/selectors'


const Home = () => {

  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});
  const [videoState, setVideoState] = useState({ isMute: 1 })

  const dispatch = useDispatch();
  const videosReduxSelector = useSelector(VideosReduxSelector)
  const currentVideoReduxSelector = useSelector(CurrentVideoReduxSelector)

  const opts = {
    height: '360',
    playerVars: {
      mute: videoState.isMute,
      autoplay: 1
      // origin: 'http://localhost:3000'
    }
  }

  useEffect(() => {
    setVideos(videosReduxSelector)
    setCurrentVideo(currentVideoReduxSelector)
  }, [videosReduxSelector, currentVideoReduxSelector]);

  const onReadyYtb = (event) => {
    event.target.playVideo()
  }

  const onEndYtb = (event) => {
    if (videos[0]) {
      setVideoState({ isMute: event.target.isMuted() })
      dispatch(nextVideo())
    }
  }

  const handlePlayVideo = (video) => {
    dispatch(playVideo(video))
  }

  const handleDeleteVideo = (video) => {
    dispatch(deleteVideo(video))
  }


  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="video">
            {currentVideo.id ?
              <YouTube
                className="w-100"
                videoId={currentVideo.id}
                opts={opts}
                onReady={onReadyYtb}
                onEnd={onEndYtb}
              /> :
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/icon-ytb.png`}
                height="360px"
                className="w-100"
                alt=""
              />
            }
          </div>
        </div>
        <div className="col-lg-4">
          <div className="play-list">
            {videos.map((video, index) =>
              <VideoCard
                key={index}
                stt={index + 1}
                video={video}
                handlePlayVideo={handlePlayVideo}
                handleDeleteVideo={handleDeleteVideo}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home