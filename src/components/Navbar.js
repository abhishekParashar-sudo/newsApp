import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
      <div><nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="#">NewsMonkey</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Business">Business</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Entertainment">Entertainment</Link>
          </li>
        
          <li className="nav-item">
            <Link className="nav-link" to="/Health">Health</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Science">Science</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Sports">Sports</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Technology">Technology</Link>
          </li>
        </ul>
        
      </div>
    </nav></div>
    )
  }


export default Navbar