import React ,{useState,} from 'react';
import './Dashb.css'
import { useEffect } from 'react';
import Axios from 'axios'
import Button from './Button';


function Dash(){

 
const [s,sdata]=useState([]);
useEffect(()=>{
    Axios.get('http://localhost:3001/app' && 'http://192.168.43.45:3001/app').then((ress)=>{
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
 