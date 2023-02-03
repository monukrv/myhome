import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Dashmenu from "./dashmenu";
import { urll } from "./variable";
import './Dashbord.css';

function Dashbord(props) {

  const [name, sname] = useState('');
  const [mm, smm] = useState(false);
  const [rd, srd] = useState(false);


  let navi = useNavigate()
  const logout = () => {
    axios.get("http://localhost:3001/logout").then((response) => {
      if (response.data.loggedIn == false) {
        smm(false)
        srd(true)
        navi('/')
      }
    });
  }

  useEffect(() => {

    axios.get(urll.remoteurl).then((response) => {
      if (response.data.loggedIn === false) {
        smm(false)
        srd(true)
        { setTimeout(function () { navi('/') }, 1500) }
      } else {
        axios.get(urll.remoteurl + '/userdata').then((response) => {
          if (response) {
            smm(true)
            sname(response.data[0].username)
          }
        });
      }
    });
  }, []);
  return (
    <>{
      mm ?
        <div className="navbar">
          <Dashmenu />
          <button onClick={logout} className="logout" >logout</button>
        </div>
        : rd ? <><h3>You are not login</h3><p1>Redirecting....</p1></> : null

    }

    </>
  )
}
export default Dashbord;

export var authh = false