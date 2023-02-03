import React, { useState } from 'react';
import mqtt from 'mqtt'
import './Button.css';
import { urll } from './variable';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Button(props) {
    let navi = useNavigate()
    const [s, st] = useState(props.ss)
    console.log(props.bts)
    urll.client.subscribe((props.pinn).toString() + "outt")

    urll.client.on('message', (topic, data) => {
        let img = Buffer.from(data)
        if (props.pinn === (JSON.parse(img))[0]) {
            st((JSON.parse(img)))
            console.log(s)
        }
    })


    const ctrlapp = () => {

        axios.get("http://localhost:3001/").then((response) => {

            if (response.data.loggedIn == true) {
                console.log(props.topic)
                urll.client.publish(props.topic, "{Pin:" + props.pinn + "}")
            } else {
                alert('login First..')
                navi('/')
            }


        });


    }

    return (
        <>

            <div className='bdiv'>
                <button className="btnc" style={{ color: (props.bts ? 'white' : 'grey'), background: (s ? 'darkgreen' : 'green') }} onClick={ctrlapp}></button>
                <label className='blbl'>{props.btname}</label>
            </div>
        </>
    )
}


export default Button;