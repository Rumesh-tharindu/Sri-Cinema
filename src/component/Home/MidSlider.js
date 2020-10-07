import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  


function MidSlider() {
    return (
        <div>
            <div className="container">
            <div className="popular-banner-wrapper">
               <div className="banner-container">
               <OwlCarousel items={1}  
                    loop={true}  
                    nav={false}
                    responsiveClass={true}
                    autoplay={true}
                    autoplayTimeout={5000}
                    autoplaySpeed={2000}
                    autoplayHoverPause={false}
                    margin={15}
                    stagePadding={0}
                    dots={false} >  
                    <div >
                        <img style={{height:'100%'}}   src="https://i.pinimg.com/originals/c0/76/8e/c0768ec92145ec5d0631bc2e7a035c1f.jpg" alt="one"/> </div>  
                    <div><img   src="https://english.mathrubhumi.com/polopoly_fs/1.4675470.1586324787!/image/image.jpg_gen/derivatives/landscape_894_577/image.jpg " alt="two"/></div>  
                    <div><img  src="https://i.pinimg.com/originals/c0/76/8e/c0768ec92145ec5d0631bc2e7a035c1f.jpg" alt="two"/></div>  
                    <div><img   src="https://i.pinimg.com/originals/c0/76/8e/c0768ec92145ec5d0631bc2e7a035c1f.jpg" alt="four"/></div>  
                    
      </OwlCarousel> 
               </div>

            </div>
            
            </div>
            
        </div>
    )
}

export default MidSlider
