import { useState, useEffect } from "react"
import VideoCard from "app/components/VideoCard/VideoCard"
import { connect } from "react-redux"
import { nextVideo } from "app/redux/actions/PlayListActions"
import YouTube from "react-youtube"


const Home = (props) => {

  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});
  const [videoState, setVideoState] = useState({ isMute: 1 })

  const opts = {
    height: '360',
    playerVars: {
      mute: videoState.isMute,
      autoplay: 1
    }
  }

  useEffect(() => {
    setVideos(props.playList.videosRedux)
    setCurrentVideo(props.playList.currentVideoRedux)
  });

  const onReadyYtb = (event) => {
    event.target.playVideo()
  }

  const onEndYtb = (event) => {
    if (videos[0]) {
      setVideoState({ isMute: event.target.isMuted() })
      props.nextVideo()
    }
  }


  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="video">
            <YouTube
              className="w-100"
              videoId={currentVideo.id}
              opts={opts}
              onReady={onReadyYtb}
              onEnd={onEndYtb}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="play-list">
            {
              videos.map((video, index) =>
                <VideoCard
                  key={index}
                  stt={index + 1}
                  video={video}
                />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStatetoProps = (state) => {
  return {
    playList: state.playlist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    nextVideo: () => nextVideo(dispatch)
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Home)