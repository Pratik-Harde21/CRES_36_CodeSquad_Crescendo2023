import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
  <header className="main-header clearfix" role="header">
    <div className="logo">
      <a href="#"><em>Hack</em> Edu</a>
    </div>
    <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>
    <nav id="menu" className="main-nav" role="navigation">
      <ul className="main-menu">
        <li><Link to='./main'>Home</Link></li>
        <li><a href="./courses">Courses</a></li>
        <li><Link to="./feedback">Feedback</Link></li> 
        <li><Link to="./aboutus">AboutUs</Link></li>
        <li><Link to="./quiz_main/home">Quiz</Link></li>
        <li className="has-submenu"><a href="">Account</a>
          <ul className="sub-menu">
            <li><a href="#section2">Dashboard</a></li>
            <li><a href="#section3">Contact Us</a></li>
            <li><a href="#section3">Logout</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
    </div>
  )
}

export default Navbar
