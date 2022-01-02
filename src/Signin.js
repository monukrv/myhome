import React, { useState } from "react";
import Dash from "./Dash";
import './Signin.css'
import Signup from "./Signup";

 function Signin(props) {
     const [togin,stogin] =useState(true)
     const [uname,suname] =useState(null)
     const [password,spassword] =useState(null)

console.log(uname+password)
    const logbtn = ()=>{
       
    }

    const forgot = ()=>{
        stogin(false)
     }
     return(
      <>  
       { 
             togin?
            <div className ="incon">

                <div className='initems'>
                    <input type="text" 
                                        className='infield'
                                        name="username" 
                                        placeholder="username" 
                                        required
                                        onChange={(e)=>{suname(e.target.value)}}
                                />
                </div>

                <div className='initems'>
                    <input type="password"  
                                        className='infield'
                                        name="password" 
                                        placeholder="password" 
                                        required
                                        onChange={(e)=>{spassword(e.target.value)}}
                                         
                                />
                </div>

                <div className='initems' ><button type='submit' id='logbtn' onClick={logbtn}><b> Login</b></button></div>
                <div className='initems' id='inlink'>
                   <div className='linksdiv'><a className = 'links' onClick={props.fun}>New?</a></div>
                   <div className='linksdiv'><a className ='links' onClick={forgot}>Forgot?</a></div>
                </div>
            </div>
              :<Dash />
            }
     </>
 )
}

export default Signin;