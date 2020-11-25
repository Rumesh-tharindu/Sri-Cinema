import React,{useRef,useState} from 'react'
import {useForm} from 'react-hook-form'
import '../App.css'
import axios from 'axios'

function SignUp(props) {
   const {register,handleSubmit,errors,watch}=useForm()
   const[message,showMessge]=useState('')
   console.log(message)
   const password = useRef({});
    password.current = watch("password", "");

   const onSubmit=(data)=>{
       axios({
           method:'post',
           url:'https://cellke-backend.herokuapp.com/user/register',
           data:data

       }).then(res=>{
           if(!res.data.status){
             console.log(res)
           if(res.data.response==true){
            props.history.push('/validate')
           }
           else{
               showMessge(res.data.message)
           }
         }
           else{
            props.history.push('/home')
           }

       })

   }
    return (
        <div>
           <div className="container ">
               <form  className="signup-form mx-auto px-5 p-3 mt-4" onSubmit={handleSubmit(onSubmit)}>
                   <h3>SignUp for CELLKE</h3>

                  <div className="form-group">
                      <label htmlFor="">UserName </label>
                      <input
                      type="text"
                      name="username"
                      ref={register({
                          required:'Enter Full Name here',

                      })}
                      className="form-control"/>
                      {errors.fullname && <span className="text-danger font-weight-bold">{errors.fullname.message}</span>}
                  </div>
                  <div className="form-group">
                      <label htmlFor="">E-mail</label>
                      <input
                       defaultValue={props.location.state.email}
                       type="text"
                        name="email"
                        id=""
                       className="form-control"
                       ref={register({
                           required:'Enter email address',
                           pattern:{
                               value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                               message:"Enter correct email format"
                           }
                       })}
                       />
                       {errors.email && <span className="text-danger font-weight-bold">{errors.email.message}</span>}
                       <p className="message-text">{message}</p>
                  </div>
                  <div className="form-group">
                      <label htmlFor="">Password</label>
                      <input
                      type="password"
                      name="password"
                      ref={register({
                          required:'Enter your password',
                          pattern:{
                              value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                              message:"password should contain at least one letter, one number and one special character"
                          }
                      })}
                      className="form-control"/>
                      {errors.password && <span className="text-danger font-weight-bold">{errors.password.message}</span>}
                  </div>
                  <div className="form-group">
                      <label htmlFor="">Confirm Password</label>
                      <input type="password"
                      name="password__repeat"
                      ref={register({
                          required:"Enter confirm password",
                          validate:value=>value === password.current || "The passwords do not match"
                      })}
                     className="form-control"/>
                        {errors.password__repeat && <span className="text-danger font-weight-bold">{errors.password__repeat.message}</span>}
                  </div>
                  <div className="form-group">
                      <label htmlFor="">Phone Number</label>
                      <input type="tel"
                       name="phone"
                       ref={register({
                           required:'Enter your phone number',
                           pattern:{
                               value: /^\d{10}$/,
                               message: 'Enter correct phone number'

                           }
                       })}
                       className="form-control"/>
                       {errors.phone && <span className="text-danger font-weight-bold">{errors.phone.message}</span>}
                  </div>
                  <div className="form-group">
                      <button className="form-control">Signup</button>
                  </div>
               </form>
           </div>

        </div>
    )
}

export default SignUp
