
import React, { useState} from 'react';
 import Btnc from './Btnc';
 import './App.css';
 import Dash from './Dash'
 import Manage from './Mange'
 import Addbtn from './Addbtn';
 import OutsideClickHandler from 'react-outside-click-handler';
import Button from './Button';
import { colors, fonts, url } from './variable';
const remoteurl =url.local;
import sockett from 'socket.io-client';
function App() {
    const [btn,sbtn] =useState(false);
    const [dbtn,dsbtn] =useState(false);
    const [mbtn,msbtn] =useState(false);


  const Addb=()=>{
    sbtn(!btn);
  }

  const socket = sockett('http://localhost:3001/' && 'http://192.168.43.45:3001/');
  const fff=()=>{
    socket.emit('msg',"{Pin:2}")
}


  const Dasb =()=>{
                   dsbtn(!dbtn)
                   sbtn(false);
                   msbtn(false)
                  
                  }    
  const Mng =()=>{
                    msbtn(!mbtn)
                    sbtn(false);
                    dsbtn(false)
                   
                   } 
    return (
      <div className='contain'>
       {!mbtn && !dbtn?
       <>
        <button onClick={Mng}>Manage</button>
        <button onClick={Dasb}>Dashboard</button>
        <button onClick={fff} >MonuG</button>
       </>
        :null
       }
      
{/*

      <select onChange={(e)=>{sd(e.target.value)}}>
              <option>select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
*/}
      <div id="btn">
        
        { 
          dbtn || btn || mbtn?
            (dbtn && !btn && !mbtn?<OutsideClickHandler onOutsideClick={Dasb}><Dash /></OutsideClickHandler>:
              (mbtn && !dbtn && !btn?
                <OutsideClickHandler onOutsideClick={Mng}><Manage /></OutsideClickHandler>:
                  <OutsideClickHandler onOutsideClick={Addb}><Btnc name={Addb}/></OutsideClickHandler>)):
                    <Addbtn name={Addb}/>
                
        }

      </div>
      </div>
    );
    

}

export default App;


