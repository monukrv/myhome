import React, { useEffect, useState } from 'react';
import './Button.css';
import styled from "styled-components"
import sockett from 'socket.io-client';
import { urll } from './variable';

function Button(props){
    const socket = sockett(urll.remoteurl);
    const[s,st]=useState(props.bts)
    const[a,as]=useState(0)
 
    socket.on('me',(data)=>{
          st(data[1])
          console.log(s)
    })

    const ctrlapp=()=>{
          socket.emit('msg',"{Pin:"+props.pinn+"}")
    }
 
    const Butt = styled.button`
    color:${s?'white':'grey'};
    background-color:${1?'green':null};
    `
    return(
       <>
       <div className='bdiv'>
        <Butt className="btnc" onClick={ctrlapp}></Butt>
        <label className='blbl'>{props.btname}</label>
        </div>
 </>
    )
}

             
export default  Button;