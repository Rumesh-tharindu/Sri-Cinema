import React from 'react'
import './BannerSlider.css'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

   const BannerSlider =()=>{
    return (
        <div>
           <div className="bannerSlider">
           <OwlCarousel items={2}  
          className="owl-theme"  
          loop  
          nav={false}
          margin={10}
          dots={false}
          slideBy={1}
          autoPlay={true}
          autoplayTimeout={1000}
          autoplaySpeed={100} >  
           <div ><img   src="https://i.pinimg.com/originals/c0/76/8e/c0768ec92145ec5d0631bc2e7a035c1f.jpg"/></div>  
           <div><img   src="https://i.pinimg.com/originals/c0/76/8e/c0768ec92145ec5d0631bc2e7a035c1f.jpg"/></div>  
           <div><img  src="https://i.pinimg.com/originals/c0/76/8e/c0768ec92145ec5d0631bc2e7a035c1f.jpg"/></div>  
           <div><img   src="https://i.pinimg.com/originals/c0/76/8e/c0768ec92145ec5d0631bc2e7a035c1f.jpg"/></div>  
          
      </OwlCarousel>  
           </div>
        </div>
    )
}

export default BannerSlider
