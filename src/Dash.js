import React ,{useState,} from 'react';
import './Dashb.css'
import { useEffect } from 'react';
import Axios from 'axios'
import Button from './Button';
import { urll } from './variable';


function Dash(){

 
const [s,sdata]=useState([]);
useEffect(()=>{
    Axios.get(urll.remoteurl+'/app').then((ress)=>{
      sdata(ress.data)
      console.log(ress.data)
        
    })
},[])

   
    return(
       <div className='containerd'>
              {s.map((val=>{
                return(
                  <>
                    <div className='items'>
                    <Button 
                    
                    btname={val.b_name} 
                    pinn={val.pin}
                    
                    />
                    </div>

                  </>
                )
              }))}
        </div>
    )
}

export default Dash;
 