import React,{useState} from 'react';
import loginimage from "./login-image.jpg";
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'
import Home from './Home/home'

function SignIn(){
  const [isAuthenticate,handleAuthontiaction]=useState(false)
  const{register,handleSubmit,errors}=useForm()
   const onSubmit=(data)=>{
   
     handleAuthontiaction({isAuthenticate:false})
    
         
       
    }
  const required="This filed is required"

  const erorrMessage =(error)=>{
  return <p className="invalid-feedback d-block font-weight-bold">{error}</p>
  }
    return(
        <React.StrictMode>
         {isAuthenticate ?<Home /> : 
        <div className="login-container">
         <div className="container p-5">
            <div className="row">
          <div className="col-lg-6 py-5" style={{background:'#24364e'}}>
              <div className="login-left">
              <h1 className="text-center mb-3">Login Here</h1>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" className="form-control" ref={register({required:true})} />
                    {errors.email && errors.email.type==='required' && erorrMessage(required)}
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" className="form-control"  ref={register({required:true})} />
                    {errors.password && errors.password.type==='required' && erorrMessage(required)}
                </div>
                <div className="form-group mt-5">
                   
                    <input type="submit" className="form-control" value="Login" />
                </div>
                <div className="form-group ">
                   
                   <button  className="form-control mt-3 faceebook-btn"> <span className="fa fa-facebook mr-3"></span> Facebook</button>
                   <button  className="form-control mt-3 insta-btn"> <span className="fa fa-instagram"></span> Instragram</button>
               </div>
              
              </form>
              </div>
          </div>
          <div className="col-lg-6 p-0 ">
              <img src={loginimage}  className="img-fluid" alt="login"/>
          </div>
          </div>
         </div>
        </div>
}
        </React.StrictMode>
    )
}

export default SignIn;