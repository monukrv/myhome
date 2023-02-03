import React from "react";
import './dashmenu.css'
import { useNavigate } from "react-router";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



export default function Dashmenu() {
    let nav = useNavigate;
    const home = () => {
        nav('/dash')
    }
    return (<>

        <div className="dashmenu">

            <ul className="ullist">
                <li><Link to="/dash" className="link">Home</Link></li>
                <li><Link to="/mdash" className="link">M Dash</Link></li>
                <li><Link to="/bord" className="link">Bord</Link></li>
                <li><Link to="/user" className="link">User</Link></li>
                <li><Link to="/addapp" className="link">Add</Link></li>
            </ul>

        </div>

    </>)

}