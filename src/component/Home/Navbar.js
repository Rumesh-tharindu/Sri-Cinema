import React from 'react'

function Navbar() {
    return (
        <div>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#"><i className="fas fa-video mr-1"></i>  ශ්‍රී Cinema</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon fa fa-bars"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav  ml-5">
      <li class="nav-item">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Movies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Tv Shows</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Dramas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">My Collection</a>
      </li>
    </ul>
  </div>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav  ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#"><i className="fa fa-search"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i className="fa fa-shopping-cart"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i className="fas fa-bell"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">profile</a>
      </li>
    </ul>
  </div>
  
  
</nav>
        </div>
    )
}

export default Navbar
