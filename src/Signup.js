import React from "react";
import './Signup.css'

 function Signup(props) {
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
                     />
             </div> 

               <div className='upgrids'>
                  <label>Email or Phone</label>
                  <input
                     type='text'
                     className='upinput'
                     placeholder='Enter Email or Phone'
                     />
               </div> 

             <div className='upgrids'>
                  <label>Password</label>
                  <input
                     type='password'
                     className='upinput'
                     placeholder='Enter your password'
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
                  <button className='upbtn' >Create</button>
               </div> 

        </div>
     </>

     )
}

export default Signup;