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
          autoplayHoverPause={true}
          margin={15}
          stagePadding={200}
           >  
           <div className="banner-view" >
               <img style={{height:'100%'}}   src="https://vhx.imgix.net/vodlk1/assets/45183c26-1865-44c7-acd4-f3f13b6993d2-da19d485.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640" alt="one"/>
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
               <img   src="https://efusion1-img1.akamaized.net/57f40334ab0dde68d400ad26/video_image/5d18fd3be0dda95c3425f5ef/1561918779/original.jpg?1561918779" />
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
               <div className="banner-view">
               <img   src="https://vhx.imgix.net/vodlk1/assets/45183c26-1865-44c7-acd4-f3f13b6993d2-da19d485.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640" alt="two"/>
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
