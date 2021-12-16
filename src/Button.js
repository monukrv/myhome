import React, { useEffect, useState } from 'react';
import './Button.css';
import styled from "styled-components"
import sockett from 'socket.io-client';
import { urll } from './variable';

function Button(props){
    const socket = sockett('http://localhost:3001/' && urll.remote);
    const[s,st]=useState(0)
    const[a,as]=useState(0)
 
    socket.on('mmc',(data)=>{
          st(data)
    })

    const ctrlapp=()=>{
          socket.emit('msg',"{Pin:"+props.pinn+"}") 
          if(s==0){alert('bord not connected.')}
    }
 
    const Butt = styled.button`
    color:${1?'white':'grey'};
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