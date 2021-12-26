import React, {  useState } from 'react';
import './Button.css';
import { urll } from './variable';

function Button(props){
    const[s,st]=useState(props.bts)
    const[pin,spin]=useState(props.pinn);
    urll.client.subscribe(pin.toString()+"outt")

    urll.client.on('message',(topic,data)=>{
         var cdata =JSON.parse(data)
         if(props.pinn ===cdata[0]){
             st(cdata[1])
         }
    })


    const ctrlapp=()=>{
          urll.client.publish('esp8266',"{Pin:"+props.pinn+"}")
          spin(props.pinn);
    }
    
    /*
    const Butt = styled.button`
    color:${s?'white':'grey'};
    background-color:${1?'green':null};
    `*/
    return(
       <>
       <div className='bdiv'>
        <button className="btnc"  style={{color:(s?'white':'grey'),background:(s?'darkgreen':'green')}} onClick={ctrlapp}></button>
        <label className='blbl'>{props.btname}</label>
        </div>
 </>
    )
}

             
export default  Button;