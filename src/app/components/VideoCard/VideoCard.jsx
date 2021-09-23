import { useState, useEffect } from "react";
import { connect } from "react-redux"
import { playVideo } from "app/redux/actions/PlayListActions"

const VideoCard = (props) => {

  const [video, setVideo] = useState({});

  useEffect(() => {
    setVideo(props.video)
  }, [video]);

  const handlePlayVideo = () => {
    props.playVideo(video)
  }


  return (
    <div className="row video-card">
      <p className="col-lg-1 col-mb-1 text-center">{props.stt}</p>
      <div className="col-lg-3 col-mb-3 text-center">
        <img
          width="48px"
          height="48px"
          src={props.video.img}
          alt={props.video.title}
        />
      </div>
      <div className="col-lg-8 col-mb-8">
        <h6
          onClick={handlePlayVideo}
          style={{ cursor: "pointer" }}
        >
          {props.video.title}
        </h6>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    playList: state.playlist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playVideo: (video) => playVideo(video, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoCard)