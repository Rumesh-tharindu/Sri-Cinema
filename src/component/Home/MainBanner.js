import React from 'react'
import wrapperImage from './wrapper-image.jpg'

function MainBanner() {
    return (
        <div>
          <div className="container-fluid p-0">
             <div className="img-wrapper">
                 <img src={wrapperImage} alt="" className="img-fluid"/>
                  <div className="trailer-info">
                      <h1 className="mb-3">New Arrival</h1>
                      <p>Ape Kaalaye Patachara is a 2016 Sri Lankan Sinhala epic biographical film directed by Sugath Samarakoon and produced by Vishwakumara Wathiyage for Helawood Films.</p>
                    <button className="play-btn mr-3"><i class="fas fa-caret-right m-2"></i>Play</button>
                    <button className="my-list-btn "><i class="fa fa-plus m-2"></i>My Collection</button>
                  </div>
                  

             </div>
          </div>
        </div>
    )
}

export default MainBanner
