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
        slidesToShow:2,
        slidesToScroll: 1
      };
    return (
        <div>
         <Slider {...settings}>
        <div>
        <img style={{height:'100%'}}   src="https://lh3.googleusercontent.com/proxy/TITkSOQIpS5CUz68jdFEtSwTNDKPddbbiORJ4bw1wE3YdbJQ2DOmv1gGTO0cSUDLElo__e-FcW5iFTnxwmRRHTf5hp36xhhC6yv5pS7RqA" alt="one"/>
        </div>
        <div>
        <img style={{height:'100%'}}   src="https://lh3.googleusercontent.com/proxy/TITkSOQIpS5CUz68jdFEtSwTNDKPddbbiORJ4bw1wE3YdbJQ2DOmv1gGTO0cSUDLElo__e-FcW5iFTnxwmRRHTf5hp36xhhC6yv5pS7RqA" alt="one"/>
        </div>
        <div>
        <img style={{height:'100%'}}   src="https://lh3.googleusercontent.com/proxy/TITkSOQIpS5CUz68jdFEtSwTNDKPddbbiORJ4bw1wE3YdbJQ2DOmv1gGTO0cSUDLElo__e-FcW5iFTnxwmRRHTf5hp36xhhC6yv5pS7RqA" alt="one"/>
        </div>
        <div>
        <img style={{height:'100%'}}   src="https://lh3.googleusercontent.com/proxy/TITkSOQIpS5CUz68jdFEtSwTNDKPddbbiORJ4bw1wE3YdbJQ2DOmv1gGTO0cSUDLElo__e-FcW5iFTnxwmRRHTf5hp36xhhC6yv5pS7RqA" alt="one"/>
        </div>
        <div>
        <img style={{height:'100%'}}   src="https://lh3.googleusercontent.com/proxy/TITkSOQIpS5CUz68jdFEtSwTNDKPddbbiORJ4bw1wE3YdbJQ2DOmv1gGTO0cSUDLElo__e-FcW5iFTnxwmRRHTf5hp36xhhC6yv5pS7RqA" alt="one"/>
        </div>
        
       
      </Slider>
        </div>
    )
}

export default PopularBanner
