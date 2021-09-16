

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="video">
            <iframe className="w-100" height="360" src="https://www.youtube.com/embed/8bBmDAtHUJY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="play-list">
            list
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home