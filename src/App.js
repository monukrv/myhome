
import React, { useState} from 'react';
 import Btnc from './Btnc';
 import './App.css';
 import Dash from './Dash'
 import Manage from './Mange'
 import Addbtn from './Addbtn';
 import OutsideClickHandler from 'react-outside-click-handler';
import { urll } from './variable';
import Signin from './Signin';
import Signup from './Signup';


function App() {
    const [btn,sbtn] =useState(false);
    const [dbtn,dsbtn] =useState(false);
    const [mbtn,msbtn] =useState(false);

    const [startbtn,sstartbtn]=useState(true)
    const [logbtn,slogbtn] =useState(true);

 

  const Addb=()=>{
    sbtn(!btn);
                 }

  const Logbtn=()=>{
                 slogbtn(!logbtn)
                }

  const fff=()=>{
    sstartbtn(!startbtn)
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
            { /*
            !mbtn && !dbtn?
            <>
              <button onClick={Mng}>Manage</button>
              <button onClick={Dasb}>Dashboard</button>
              <button onClick={fff} >start</button>
              <Signup />
            </>
              :null
              */
             startbtn?<button onClick={fff} className='start'></button>:
                 logbtn?
                    <OutsideClickHandler onOutsideClick={fff}>
                      <Signin fun={Logbtn}/>
                    </OutsideClickHandler>
                    :<Signup fun={Logbtn} />
            }
            
      
            <div id="btn">
              
              { /*
                dbtn || btn || mbtn?
                  (dbtn && !btn && !mbtn?<OutsideClickHandler onOutsideClick={Dasb}><Dash /></OutsideClickHandler>:
                    (mbtn && !dbtn && !btn?
                      <OutsideClickHandler onOutsideClick={Mng}><Manage /></OutsideClickHandler>:
                        <OutsideClickHandler onOutsideClick={Addb}><Btnc name={Addb}/></OutsideClickHandler>)):
                          <Addbtn name={Addb}/>
                  */   
                 
                          

              }

            </div>
      </div>
    );
    

}

export default App;


