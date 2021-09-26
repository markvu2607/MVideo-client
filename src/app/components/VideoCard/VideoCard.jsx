
const VideoCard = ({ video, stt, handlePlayVideo }) => {

  return (
    <div className="row video-card">
      <p className="col-lg-1 col-mb-1 text-center">{stt}</p>
      <div className="col-lg-3 col-mb-3 text-center">
        <img
          width="48px"
          height="48px"
          src={video.img}
          alt={video.title}
        />
      </div>
      <div className="col-lg-8 col-mb-8">
        <h6
          onClick={() => handlePlayVideo(video)}
          style={{ cursor: "pointer" }}
        >
          {video.title}
        </h6>
      </div>
    </div>
  )
}

export default VideoCard