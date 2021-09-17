

const VideoCard = (props) => {
  return (
    <div className="row video-card">
      <p className="col-lg-1">{props.stt}</p>
      <div className="col-lg-3">
        <img
          width="48px"
          height="48px"
          src={props.img}
          alt={props.name}
        />
      </div>
      <div className="col-lg-8">
        <h6>{props.name}</h6>
        <p>Suggested by <b>{props.suggester}</b></p>
      </div>
    </div>
  )
}

export default VideoCard