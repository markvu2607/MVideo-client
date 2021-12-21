

const ItemSearch = ({ video, handleAddVideo }) => {

  return (
    <div className="row px-4 item-search">
      <img
        alt={video.title}
        src={video.img}
        className="col-lg-2 col-mb-2"
      />
      <div className="col-lg-8 col-mb-8 flex-column mt-1">
        <b>{video.title}</b>
        <p>Channel: {video.channelTitle}</p>
        <p>Duration: {video.duration}</p>
      </div>
      <button
        className="btn btn-primary col-lg-2 col-mb-2"
        onClick={() => handleAddVideo(video)}
      >
        Add to list
      </button>
    </div>
  )
}

export default ItemSearch