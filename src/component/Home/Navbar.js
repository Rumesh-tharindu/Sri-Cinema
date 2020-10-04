import React from 'react'

function Navbar() {
    return (
        
  <nav className="navbar  navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="#"><i className="fas fa-video mr-1"></i>  ශ්‍රී Cinema</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon fa fa-bars"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-5">
      <li className="nav-item">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Movies</a>
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
        <a className="nav-link disabled" href="#">profile</a>
      </li>
    </ul>
  </div>
  
  
</nav>
        
    )
}

export default Navbar
