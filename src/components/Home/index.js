import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
          className="lg-image"
        />
      </Link>
    </div>
  </>
)

export default Home
