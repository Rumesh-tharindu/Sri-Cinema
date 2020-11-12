import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import './popularBanner.css'

function PopularBanner() {
    var settings = {
        nav:true,
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,
        
      };
    return (
        <div>
         <Slider {...settings}>
        <div>
        <img style={{width:"200px",height:"200px"}}   src="https://vhx.imgix.net/vodlk1/assets/45183c26-1865-44c7-acd4-f3f13b6993d2-da19d485.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640" alt="one"/>
        </div>
        <div>
        <img style={{height:'100%'}}   src="https://vhx.imgix.net/vodlk1/assets/45183c26-1865-44c7-acd4-f3f13b6993d2-da19d485.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640" alt="one"/>
        </div>
        <div>
        <img style={{height:'100%'}}   src="https://vhx.imgix.net/vodlk1/assets/45183c26-1865-44c7-acd4-f3f13b6993d2-da19d485.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640" alt="one"/>
        </div>
        <div>
        <img style={{height:'100%'}}   src="https://vhx.imgix.net/vodlk1/assets/45183c26-1865-44c7-acd4-f3f13b6993d2-da19d485.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640" alt="one"/>
        </div>
        <div>
        <img style={{height:'100%'}}   src="https://vhx.imgix.net/vodlk1/assets/45183c26-1865-44c7-acd4-f3f13b6993d2-da19d485.jpg?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640" alt="one"/>
        </div>
        
       
      </Slider>
        </div>
    )
}

export default PopularBanner
