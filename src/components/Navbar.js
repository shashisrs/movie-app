import React from 'react'
import logo from "../assets/logo.avif";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-dark pt-lg-5">
  <div className="container">
  <Link to="/"><img src={logo} alt="" className='rounded-circle' style={{height:"50px",width:"50px"}} /></Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar