
import React, { useEffect, useState } from 'react';
import Btnc from './Btnc';
import './App.css';
import Dash from './Dash'
import Manage from './Mange'
import Addbtn from './Addbtn';
import OutsideClickHandler from 'react-outside-click-handler';
import { urll } from './variable';
import Signin from './Signin';
import Signup from './Signup';
import axios from 'axios';
import { useNavigate } from 'react-router';
axios.defaults.withCredentials = true;

function App() {
  let navi = useNavigate()
  useEffect(() => {
    axios.get("http://localhost:3001/").then((response) => {

      if (response.data.loggedIn == true) {
        navi('/dash')

      }

    });
  }, []);
  const [btn, sbtn] = useState(false);
  const [dbtn, dsbtn] = useState(false);
  const [mbtn, msbtn] = useState(false);
  const [s, sn] = useState(false);
  const [startbtn, sstartbtn] = useState(true)
  const [logbtn, slogbtn] = useState(true);



  const Addb = () => {
    sbtn(!btn);
  }

  const Logbtn = () => {
    slogbtn(!logbtn)
  }

  const fff = () => {
    sstartbtn(!startbtn)
  }

  return (
    <>
      <div className='contain'>

        {
          startbtn ?
            <>
              <button onClick={fff} className='start'></button>
              <marquee style={{ position: 'absolute', top: '50%', fontSize: '30px' }}><b>Home Automation is very Easy..</b></marquee>
            </>
            :
            logbtn ?
              <OutsideClickHandler onOutsideClick={fff}>
                <Signin fun={Logbtn} />
              </OutsideClickHandler>
              : <Signup fun={Logbtn} />
        }

      </div>

    </>
  );


}

export default App;


