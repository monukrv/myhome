import axios from "axios";
import React, { useState } from "react";
import './Signup.css'
import { urll } from "./variable";

 function Signup(props) {
    const [name,sname]=useState();
    const [email,semail]=useState();
    const [password,spassword]=useState();

    const cretae= ()=>{
       axios.post(urll.remoteurl+'/newuser',{
           name:name,
           email:email,
           password:password,
       }).then((data)=>{
          console.log(data.data)
       })
    }

     return(
     <> 
        <div className='upcon'>

             <div className='header'>
                <div className='title'><h2>Create Account</h2></div>

                <div className="close">
                        <button className="bclose" onClick={props.fun}></button>
                </div>
             </div>

             <div className='upgrids'> 
                  <label>Name</label>
                  <input
                     type='text'
                     className='upinput'
                     placeholder='Enter your name'
                     onChange={(e)=>{sname(e.target.value)}}
                     />
             </div> 

               <div className='upgrids'>
                  <label>Email or Phone</label>
                  <input
                     type='text'
                     className='upinput'
                     placeholder='Enter Email or Phone'
                     onChange={(e)=>{semail(e.target.value)}}
                     />
               </div> 

             <div className='upgrids'>
                  <label>Password</label>
                  <input
                     type='password'
                     className='upinput'
                     placeholder='Enter your password'
                     onChange={(e)=>{spassword(e.target.value)}}
                     />
             </div> 

               <div className='upgrids'>
                  <label>Userid</label>
                  <input
                     type='text'
                     className='upinput'
                     placeholder='Enter your userid'
                     />
               </div> 

               <div className='footer'>
                  <button 
         
                       className='upbtn' 
                       onClick={cretae}
                  />
               </div> 

        </div>
     </>

     )
}

export default Signup;