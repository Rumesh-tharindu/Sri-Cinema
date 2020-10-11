import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import BannerSlider from './BannerSlider'
import PopularBanner from './PopularBanner'

import MidSlider from './MidSlider'

export default function home() {
    return (
        <div>
           <Navbar />
           <BannerSlider/>
           <PopularBanner  />
           
          <MidSlider />
        </div>
    )
}
