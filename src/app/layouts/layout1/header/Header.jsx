import { useState } from 'react'
import SearchBox from './SearchBox'
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()

  const [shouldOpenNavbarMb, setShouldOpenNavbarMb] = useState(false)
  const [shouldOpenSearchBox, setShouldOpenSearchBox] = useState(false)

  const toggleNavBarMb = () => {
    setShouldOpenNavbarMb(!shouldOpenNavbarMb)
  }

  const closeNavbarMb = () => {
    document.querySelector(".my-navbar-mb").style.animation = `slideToRight 0.5s ease forwards`
    setTimeout(() => {
      toggleNavBarMb()
    }, 500)
  }

  const closeSearhBox = () => {
    setShouldOpenSearchBox(!setShouldOpenSearchBox)
  }

  const handleClickSearch = () => {
    if (isAuthenticated) {
      setShouldOpenSearchBox(!shouldOpenSearchBox)
    } else {
      loginWithRedirect()
    }
  }

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
          <button
            className="btn btn-dark"
            onClick={handleClickSearch}
          >
            Search
          </button>
        </div>
      </div>
      <svg
        onClick={toggleNavBarMb}
        xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="menu-mb" viewBox="0 0 16 16"
      >
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
      </svg>
      {!isAuthenticated ?
        <button onClick={() => loginWithRedirect()}>
          Login
        </button> :
        <div className='user-info'>
          <div className='user-name'> Hi, <span>{user.name}</span></div>
          <div className='btn-logout' onClick={() => logout()}>Logout</div>
        </div>
      }

      {shouldOpenNavbarMb &&
        <div className="my-navbar-mb">
          <ul>
            <svg
              onClick={closeNavbarMb}
              xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="close-icon" viewBox="0 0 16 16">
              <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
            </svg>
            <li>Search</li>
            <li>Play list</li>
            <li>Login</li>
          </ul>
        </div>
      }

      {shouldOpenNavbarMb &&
        <div
          onClick={closeNavbarMb}
          className="cover-layer"></div>
      }

      {shouldOpenSearchBox &&
        <SearchBox
          onClose={closeSearhBox}
        />
      }


    </header>
  )
}

export default Header