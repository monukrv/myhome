
import React, { useEffect, useState } from 'react';
import './Btnc.css'
import Axios from 'axios';
import { urll } from './variable';
import { useNavigate } from "react-router-dom";

function Btn_c(props) {
      const [s, ssdata] = useState([]);
      const [p, sp] = useState(null);
      const [n, sn] = useState(null);
      const [t, st] = useState(null);
      const [b, sb] = useState(null);
      const [bname, sbname] = useState(null);
      const [bord, sbord] = useState(null);
      const [contype, scontye] = useState(null);


      const [m, sm] = useState(0);
      const [tog, stog] = useState(true);
      const [togbt, stogbt] = useState(false);
      let navigate = useNavigate();
      useEffect(() => {
            Axios.get(urll.remoteurl + '/bord').then((ress) => {
                  ssdata(ress.data)
            })
      }, [])
      const onSubmit = () => {
            Axios.post(urll.remoteurl + '/insertbtn', {
                  pin: p,
                  bord: b,
                  type: t,
                  name: n,
                  mode: m
            })
      }
      const OnSubmit = () => {

            Axios.post(urll.remoteurl + '/insertbord', {
                  bord: bord,
                  name: bname,
                  mode: contype
            }).then((response) => {
                  if (response.data.loggedIn == true) {
                        navigate("/dash")
                  }
            })
      }
      const Close = () => {
            stog(true)
      }
      const addbtn = () => {
            return (
                  <div className="container">
                        <form autocomplete="off">
                              <div className="row1">
                                    <div className="divl">
                                          <label>Name: </label>
                                    </div>

                                    <div className="divi">
                                          <input type="text"
                                                name="name"
                                                onChange={(e) => { sn(e.target.value) }}
                                                placeholder="Name"
                                                required
                                          />
                                          <br />
                                    </div>
                              </div>

                              <div className="row3">
                                    <div className="divl">
                                          <label>Type:</label>
                                    </div>
                                    <div className="divi">
                                          <select onChange={(e) => { st(e.target.value) }} required>
                                                <option>select</option>
                                                <option value='1'>digital</option>
                                                <option value='2'>analog</option>
                                          </select>
                                    </div>
                              </div>

                              <div className="row2">
                                    <div className="divl">
                                          <label>Board:</label>
                                    </div>
                                    <div className="divi">
                                          <select onChange={(e) => { sb(e.target.value) }} required>
                                                <option>select</option>
                                                {s.map((val) => {
                                                      return (<> <option>{val.bordName}</option> </>)
                                                })}

                                          </select>
                                    </div>
                              </div>

                              <div className="row4">
                                    <div className="divl">
                                          <label>Pin :</label>
                                    </div>
                                    <div className="divi">
                                          <select onChange={(e) => { sp(e.target.value) }} required>
                                                <option>select</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>16</option>
                                          </select>
                                    </div>
                              </div>

                              <div className="row5">
                                    <div className="divl">
                                          <label>Mode:</label>
                                    </div>
                                    <div className="divi">
                                          <select onChange={(e) => { sm(e.target.value) }} required>
                                                <option>select</option>
                                                <option value={1}>input</option>
                                                <option value={0}>output</option>
                                          </select>
                                    </div>
                              </div>

                              <div className="row6">
                                    <button className="cls" onClick={onSubmit}>Add button</button>
                              </div>

                        </form>
                        <div className="close">
                              <button className="bclose" onClick={Close}></button>
                        </div>
                  </div>


            )
      }

      const addbord = () => {
            return (
                  <div className="bordcontainer">
                        <form autocomplete="off">
                              <div className="row1">
                                    <div className="divl">
                                          <label>Name: </label>
                                    </div>

                                    <div className="divi">
                                          <input type="text"
                                                name="name"
                                                onChange={(e) => { sbname(e.target.value) }}
                                                placeholder="Name"
                                                required
                                          />
                                          <br />
                                    </div>
                              </div>


                              <div className="row3">
                                    <div className="divl">
                                          <label>Board:</label>
                                    </div>
                                    <div className="divi">
                                          <select onChange={(e) => { sbord(e.target.value) }} required>
                                                <option>select</option>
                                                <option>nodemcu</option>
                                                <option>arduino</option>
                                          </select>
                                    </div>
                              </div>


                              <div className="row5">
                                    <div className="divl">
                                          <label>Mode:</label>
                                    </div>
                                    <div className="divi">
                                          <select onChange={(e) => { scontye(e.target.value) }} required>
                                                <option>select</option>
                                                <option value={1}>WiFi</option>
                                                <option value={0}>Ethernet</option>
                                          </select>
                                    </div>
                              </div>

                              <div className="row6">
                                    <button className="cls" onClick={OnSubmit}>Add Bord</button>
                              </div>

                        </form>
                        <div className="close">
                              <button className="bclose" onClick={Close}></button>
                        </div>
                  </div>


            )
      }
      const togbtn = () => {
            stog(false)
            stogbt(true)
      }
      const togbord = () => {
            stog(false)
            stogbt(false)
      }

      return (
            <>
                  {tog ? <>
                        <button onClick={togbtn}>Button</button>
                        <button onClick={togbord}>Bord</button>
                  </> : togbt ? addbtn() : addbord()

                  }

            </>
      )
}

export default Btn_c;