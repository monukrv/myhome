import React, { useState, } from 'react';
import './Dashb.css'
import { useEffect } from 'react';
import Axios from 'axios'
import Button from './Button';
import { urll } from './variable';


function Dash() {

  let myobj = {
    bord: {
      age: 0,
    },
    name: "jd"
  };


  const [s, sdata] = useState([]);

  useEffect(() => {
    Axios.get(urll.remoteurl + '/button').then((ress) => {
      console.log(ress.data)
      sdata(ress.data)
    })
  }, [])


  return (
    <div className='containerd'>
      {s.map((val => {
        return (
          <>
            <div className='items'>
              <Button

                btname={val.name}
                pinn={val.Pin}
                bts={val.status}
                topic={val.bord}
              />

            </div>

          </>
        )
      }))}
    </div>
  )
}

export default Dash;
