
const Header = () => {
  return (
    <header
      className="d-flex justify-content-between align-items-center"
    >
      <div>
        <img
          alt="logo"
          src={`${process.env.PUBLIC_URL}/assets/img/logo.png`}
          className="logo"
        />
        <div className="my-navbar-pc">
          <button className="btn btn-dark">
            Search
          </button>
          <button className="btn btn-dark">
            Play list
          </button>
        </div>
      </div>
      <button>
        Login
      </button>

      <div className="my-navbar-mb">
        abc
      </div>
      <div className="cover-layer"></div>
    </header>
  )
}

export default Header