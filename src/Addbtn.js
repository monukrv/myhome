import  './Add_btn.css';
import React from 'react';

function Addbtn(props){

    return(
       <>
       <span>
        <button className="btn" onClick={props.name}></button>
        <label>{props.btname}</label>
       
        </span>
 </>
    )
}


export default Addbtn;