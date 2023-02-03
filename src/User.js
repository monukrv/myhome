import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import './User.css'
import { urll } from "./variable";


export default function User() {
    const [data, sdata] = useState('')
    const [s, ssdata] = useState([]);
    const [tog, stog] = useState(false)
    const [tt, stt] = useState('')
    let navigate = useNavigate()

    useEffect(() => {
        axios.get(urll.remoteurl + '/bord').then((ress) => {
            ssdata(ress.data)
        })
    }, [tog])

    useEffect(() => {
        axios.get(urll.remoteurl + '/userdata').then((response) => {
            if (response) {

                sdata(response.data[0])
            }
        });
    }, [])

    const Bordlist = () => {
        axios.get(urll.remoteurl + '/bord').then((response) => {
            if (response) {
                const s = response.data
                console.log(s)
            }
        });
    }

    const deleteBord = (e) => {
        const name = e.bordName
        if (window.confirm("Do you want to delete " + name + "")) {
            axios.post(urll.remoteurl + '/delb', {
                bordid: e.bordId
            }).then((response) => {
                if (response.data == true) {
                    stog(!tog)
                }
            })
        }

    }


    const copyText = async (e) => {
        await navigator.clipboard.writeText(e.bordId);
        stt("copied")
    }


    function outFunc() {
        stt('copy ?');
    }

    return (
        <>
            <div>{data.username}</div>
            <div><button onClick={Bordlist}>Iot Bords</button></div>
            <div className="divtbl">
                <table className="tbl">
                    <tr>
                        <th>
                            Sr. No.
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Bord Id
                        </th>
                        <th>
                            Digital Pins
                        </th>
                        <th>
                            Digital Used
                        </th>
                        <th>
                            Analog Pins
                        </th>
                        <th>
                            Analog Used
                        </th>
                        <th>
                            Time
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                    {s.map((val, i) => {
                        return (
                            <>


                                <tr>
                                    <td>{i + 1}</td>
                                    <td>
                                        {val.bordName}
                                    </td>
                                    <td >
                                        {val.bordId}
                                        <div className="tooltip">
                                            <button onClick={() => copyText(val)} className='copytext' onMouseOut={outFunc}></button>
                                            <span className="tooltiptext" >{tt}</span>
                                        </div>
                                    </td>
                                    <td>
                                        {val.digitalPin}
                                    </td>
                                    <td>
                                        {val.digitalUsed}
                                    </td>
                                    <td>
                                        {val.analogPin}
                                    </td>
                                    <td>
                                        {val.analogUsed}
                                    </td>
                                    <td>
                                        {val.addTime}
                                    </td>
                                    <td>
                                        <button onClick={() => deleteBord(val)}>Delete</button>
                                    </td>

                                </tr>


                            </>
                        )
                    })}
                </table>
            </div>

        </>
    )
}