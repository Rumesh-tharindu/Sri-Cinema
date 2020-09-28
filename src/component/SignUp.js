import React,{useRef} from 'react'
import {useForm} from 'react-hook-form'
import '../App.css'

function SignUp(props) {
   const {register,handleSubmit,errors,watch}=useForm()
   const password = useRef({});
    password.current = watch("password", "");

   const onSubmit=(data)=>{
       console.log(data)
     props.history.push('/home')
   }
    return (
        <div>
           <div className="container ">
               <form  className="signup-form mx-auto px-5 p-3 mt-4" onSubmit={handleSubmit(onSubmit)}>
                   <h3>SignUp for Sri Cinema</h3>
                  <div className="form-group">
                      <label htmlFor="">Full name</label>
                      <input 
                      type="text" 
                      name="fullname"
                      ref={register({
                          required:'Enter Full Name here',
                          pattern:{
                              value:/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/,
                              message:'Enter your full name'
                          }
                      })}
                      className="form-control"/>
                      {errors.fullname && <span className="text-danger font-weight-bold">{errors.fullname.message}</span>}
                  </div>
                  <div className="form-group">
                      <label htmlFor="">E-mail</label>
                      <input defaultValue={props.location.state.email} type="text" name="" id="" className="form-control"/>
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