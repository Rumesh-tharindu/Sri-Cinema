import React,{useEffect} from 'react'
import Loader from 'react-loader-spinner'
import axios from 'axios'


function ConfirmEmail(props) {
 const confirmValidation=()=>{
 axios.get('http://localhost:5000/user/confirmEmail')
        .then(res=>{
            props.history.push('/home')
        })
   
 }
 useEffect(()=>{
    confirmValidation()
   })
   
   const styles={
        width:"100%",
        height:'100vh',
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
    return (
        <div style={styles}>
            <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
          //3 secs
 
      />
        </div>
    )
}

export default ConfirmEmail
