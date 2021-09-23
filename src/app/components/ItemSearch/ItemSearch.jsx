import { useState, useEffect } from "react"



const ItemSearch = (props) => {

  const [video, setVideo] = useState({});

  useEffect(() => {
    setVideo(props.video)
  }, [])

  const handleAddVideo = () => {
    props.handleAddVideo(video)
  }

  return (
    <div className="row px-4 item-search">
      <img
        alt={video.title}
        src={video.img}
        className="col-lg-2 col-mb-2"
      />
      <div className="col-lg-8 col-mb-8 flex-column mt-2">
        <b>{video.title}</b>
        <p>Duration: {video.duration}</p>
      </div>
      <button
        className="btn btn-primary col-lg-2 col-mb-1"
        onClick={handleAddVideo}
      >
        Add to list
      </button>
    </div>
  )
}

export default ItemSearch