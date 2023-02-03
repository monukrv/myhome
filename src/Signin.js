import axios from "axios";
import React, { useEffect, useState } from "react";
import Dash from "./Dash";
import './Signin.css'
import Signup from "./Signup";
import { urll } from "./variable";
import { useNavigate } from "react-router-dom";
import Forgot from "./Forgot";
axios.defaults.withCredentials = true;

function Signin(props) {
  const [togin, stogin] = useState(true)
  const [uname, suname] = useState(null)
  const [password, spassword] = useState(null)
  const [ldata, sldata] = useState()
  let navigate = useNavigate();
  const logbtn = () => {
    axios.post("http://localhost:3001/login", {
      username: uname,
      password: password,
    }).then((response) => {
      if (response.data.loggedIn == true) {
        navigate("/dash")
      }
    })
  }

  const handleKeyDown = (event) => {
    if (event.keyCode == 13) {
      console.log("hello clicked")
    };
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const forgot = () => {
    stogin(false)
  }
  return (
    <>
      {
        togin ?
          <div className="incon">

            <div className='initems'>
              <input type="text"
                className='infield'
                name="username"
                id='unameinput'
                placeholder="username"
                required
                onChange={(e) => { suname(e.target.value) }}
              />
            </div>

            <div className='initems'>
              <input type="password"
                className='infield'
                name="password"
                placeholder="password"
                required
                onChange={(e) => { spassword(e.target.value) }}

              />
            </div>

            <div className='initems' ><button id='logbtn' onClick={logbtn} onKeyPress={handleKeyDown}><b> Login</b></button></div>
            <div className='initems' id='inlink'>
              <div className='linksdiv'><a className='links' onClick={props.fun}>New?</a></div>
              <div className='linksdiv'><a className='links' onClick={forgot}>Forgot?</a></div>
            </div>

          </div>
          : <Forgot />
      }

    </>
  )
}

export default Signin;