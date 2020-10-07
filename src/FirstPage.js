import React,{useState} from 'react'
import './App.css';
import CountUp from 'react-countup'
import {Link} from 'react-router-dom'
import mobile from './mobile.png'
import playstore from './playstore.png'
import appstore from './appstore.png'
import ScrollUpButton from 'react-scroll-up-button'
import {useForm} from 'react-hook-form'
import family from './family.png'


import AccordianComponet from './component/AccordianComponet';


function FirstPage(props) {
    
    const{register,handleSubmit,errors}=useForm()
  const onSubmit=(data)=>{
 
    props.history.push('/signup',data)
    
  }
 
  const [scrollP,changeScrollP]=useState(0)

  window.addEventListener("scroll",()=>{
  changeScrollP(window.scrollY)
  })
 
  const required="This filed is required"

  const erorrMessage =(error)=>{
  return <p className="invalid-feedback d-block font-weight-bold">{error}</p>
  }
    return (
        <div>
            <div>
      <div className="section-1">
      <div className="header-wrapper">
        <div className="wrapper">
          <span className="lebal"><i className="fas fa-video"></i>  ශ්‍රී CINEMA</span>
          <span className="signLink"><Link to="/signin">Signin</Link></span>
        </div>
      </div>
      {/* //header */}
       <div className="email-content container">
         <div className="email-content-wrapper mt-5">
        <h1 className="email-content-title"> You can watch anything free<br />Try 24 hour free trail</h1>
        <form className="email-form" onSubmit={handleSubmit(onSubmit)}>
        <input className="email-input" name="email" type="text" placeholder="Enter Email" ref={register({required:true})} />
        <button className="btn-trail" > Free Trail   <i className="fas fa-chevron-right"></i> </button>
         {errors.email && errors.email.type==='required' && erorrMessage(required)}
        </form>
        </div>
       </div>
       <ScrollUpButton style={
         {
           backgroundColor:'#00759a',
           borderRadius:'50%',
           outline:'none'
         }
       } />
      </div>
      <div className="counter-content">
      <div className="container mt-2">
        <div className="row " >
        <div className="col-lg-4">
          <div className="count-wrapper">
            {scrollP >160  ? <span className="counter"><CountUp  end={500}/>+</span> : "" }
           
            <span className="counter-title"><i className="fas fa-film"></i> Movies</span>
          </div>
         
        </div>
        <div className="col-lg-4">
        <div className="count-wrapper">
           {scrollP >160  ? <span className="counter"><CountUp  end={120}/>+</span> : "" }
            <span className="counter-title"><i className="fas fa-tv"></i> TV Show</span>
          </div>
        </div>
        <div className="col-lg-4">
        <div className="count-wrapper">
        {scrollP >160  ? <span className="counter"><CountUp  end={90}/>+</span> : "" }
            <span className="counter-title"><i className="fas fa-theater-masks"></i> Stage Drama</span>
          </div>
        </div>
        </div>
      </div>
      </div>
      {/*illustraion*/}
      <div className="illustation-image">
       <div className="container">
         <div className="row">
           <div className="col-md-6 ">
             <img src={family} className="img-fluid" alt="illustartion-image"/>
           </div>
           <div className="col-md-6 p-5 mt-5">
             <h2>Watch Movies,TV shows,Teledarama with your family</h2>
             <h3>You can watch anything offline from your smart Tv</h3>
           </div>
         </div>
       </div>
       </div>
      {/* content mobile*/}
      <div className="content-mobile ">
        <div className="container">
        <div className="row">
        <div className="col-md-7 pt-5">
          <div className="mobile-description">
          <h1 className="mobile-title">You can watch from anywhere and anytime</h1>
          <p className="mobile-subtitle">Go and download from playstore</p>
          <div>
            <img src={playstore} />
            <img src={appstore} />
          </div>
          </div>
          </div>
        <div className="col-md-5 p-5">
          <img src={mobile}/>
        </div>
        
        </div>
        </div>
      </div>
      <div className="container  p-5 ">
         <AccordianComponet/>
      </div>
      <div className="footer">
        <div className="container">
        <div className="row">
          <div className="col-lg-4 p-4">
            <h5>Stay Conntected</h5>
            <p>just over 1000+ users watch on this platform</p>
             <h6>Contact Us</h6>
             <p>011 5995678</p>
             <div className="social-icon">
               <span><i className="fab fa-facebook"></i></span>
               <span><i className="fab fa-twitter"></i></span>
               <span><i className="fab fa-instagram"></i></span>
               <span><i className="fab fa-tiktok"></i></span>
             </div>
          </div>
          <div className="col-lg-4 pt-4">
            <h5>Privecy Policy</h5>
            <p>Cookie preferences</p>
            <p>Term of use</p>
            <p>Help Center</p>
           
          </div>
          <div className="col-lg-4 pt-4">
            <div className="pb-2">
              <input type="text" placeholder="Enter Email"/>
              <button>Free Trail</button>
            </div>
            <p>Our mission</p>
            <span>This is time to shift to the virtual theatre so you can watch from anywhere 
              and anytime.We serve  you high quality video and fast delivery without loading</span>
          </div>
        </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default FirstPage
