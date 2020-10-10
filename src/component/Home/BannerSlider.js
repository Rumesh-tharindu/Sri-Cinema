import React from 'react'
import './BannerSlider.css'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

   const BannerSlider =()=>{
    return (
        <div>
           <div className="bannerSlider">
           <OwlCarousel items={1}  
          loop={true}  
        nav={true}
          autoplay={true}
          responsiveClass={true}
          autoplayTimeout={5000}
          autoplaySpeed={1000}
          autoplayHoverPause={false}
          margin={15}
          stagePadding={200}
           >  
           <div className="banner-view" >
               <img style={{height:'100%'}}   src="https://i.pinimg.com/originals/c0/76/8e/c0768ec92145ec5d0631bc2e7a035c1f.jpg" alt="one"/>
                <div className="banner-info">
                    <h3>Latest Movie Trailers</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, culpa!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, culpa!
                    </p>
                    <span className="play-icon">
                        <i className="fa fa-play"></i>
                    </span>
                    <span className="add-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <span className="add-cart-text">add to cart</span>
                    </span>
                </div>
                </div>  
           <div className="banner-view">
               <img   src="https://english.mathrubhumi.com/polopoly_fs/1.4675470.1586324787!/image/image.jpg_gen/derivatives/landscape_894_577/image.jpg " alt="two"/>
               <div className="banner-info">
                    <h3>Latest Movie Trailer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, culpa!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, culpa!
                    </p>
                    <span className="play-icon">
                        <i className="fa fa-play"></i>
                    </span>
                    <span className="add-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <span className="add-cart-text">add to cart</span>
                    </span>
                   
                </div>
               </div>  
           
      </OwlCarousel>  
           </div>
        </div>
    )
}

export default BannerSlider
