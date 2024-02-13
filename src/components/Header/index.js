import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {withRouter, Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="image"
      />
    </Link>
    <div>
      <Popup
        modal
        trigger={
          <GiHamburgerMenu className="menu" data-testid="hamburgerIconButton" />
        }
      >
        {close => (
          <>
            <div className="popup-container">
              <IoMdClose className="cross-icon" onClick={() => close()} />
              <ul className="items-container">
                <Link to="/" className="link-style" onClick={() => close()}>
                  <li className="item-container">
                    <AiFillHome className="sm-icon" />
                    <p className="sm-title">Home</p>
                  </li>
                </Link>
                <Link
                  to="/about"
                  className="link-style"
                  onClick={() => close()}
                >
                  <li className="item-container">
                    <BsInfoCircleFill className="sm-icon" />
                    <p className="sm-title">About</p>
                  </li>
                </Link>
              </ul>
            </div>
          </>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
