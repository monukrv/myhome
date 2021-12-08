import React ,{useState,} from 'react';
import './Manage.css'
import { useEffect } from 'react';
import Axios from 'axios'

function Manage(){
const [s,sdata]=useState([]);
const [ss,ssd]=useState(false);
useEffect(()=>{
    Axios.get('http://localhost:3001/app' && 'http://192.168.43.45:3001/app').then((ress)=>{
      sdata(ress.data)
      console.log('njnkjnsknskjndjnd')
    })
},[ss])

const modify =()=>{
                    console.log('clicked')
                    
                  } 
const Delete =(k,nam)=>{

                    Axios.post('http://localhost:3001/delete'&&'http://192.168.43.45:3001/delete',{
                        pinn:k,
                        namm:nam
                        }) 
 
                        ssd(!ss)
                        
                  }                 
                  
    return(
                <div className='containerm' >
                    <table className='tbl'>
                        <div className='dvhtr'>
                            
                                    <tr className='mhtr'>
                                        
                                            <th className='msp'>Sr.No.</th>
                                            <th className='mnb'>Name</th>
                                            <th className='mnb'>Bord</th>
                                            <th className='msp'>Pin</th>
                                            <th className='mdm'>Modify</th>
                                            <th className='mdm'>Delete</th>
                                        
                            </tr>
                        </div>
                        <div className='dvdtr'>
                            {s.map((val,m)=>{
                                        
                                    return( 
                                                <tr className='mdtr'>
                                                    <td className='msp'>{m+1}</td>
                                                    <td className='mnb'>{val.b_name}</td>
                                                    <td className='mnb'>{val.bord}</td>
                                                    <td className='msp'>{val.pin}</td>
                                                    <td className='mdm'><button className='mmodify' onClick={modify}></button></td>
                                                    <td className='mdm'><button className='mdelete' onClick={()=>{Delete(val.pin,val.b_name)}}></button></td>
                                                </tr>
                                            
                                        )
                                })}
                        </div>
                        </table>
                    </div>
    )
}

export default Manage;