import React from 'react'
import Navigation from './Navigation'
import './Home.css'
import BannerSlider from './BannerSlider'
import PopularBanner from './PopularBanner'

import MidSlider from './MidSlider'

export default function home() {
    return (
        <div>
           <Navigation />
           <BannerSlider/>
           <PopularBanner  />
           
           <MidSlider />
        </div>
    )
}
