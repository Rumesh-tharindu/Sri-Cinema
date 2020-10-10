import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        
  <nav className="navbar  navbar-expand-lg navbar-light">
  <Link className="navbar-brand" to='/'><i className="fas fa-video mr-1"></i>  ශ්‍රී Cinema</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon fa fa-bars"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-5">
      <li className="nav-item">
        <Link to='./home'className="nav-link" >Home <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" to='/movie'>Movies</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Tv Shows</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Dramas</a>
      </li> 
    </ul>
    <div className="search-bar">
      <i className="fa fa-search"></i>
     <form >
       <input type="text" className="search" placeholder="search"/>
     </form>
    </div>
  </div>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav  ml-auto">
    <li className="nav-item">
        <a className="nav-link" href="#">My Collection</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><i className="fa fa-shopping-cart"></i></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><i className="fas fa-bell"></i></a>
      </li>
      <li className="nav-item">
        <div className="profile">
           <span>R</span>
        </div>
      </li>
    </ul>
  </div>
  
  
</nav>
        
    )
}

export default Navbar
