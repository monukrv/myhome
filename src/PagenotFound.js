import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
export default function PagenotFound() {


    return (
        <>
            <h1>404 Page not found</h1>
            <h3>back to  <Link to="/">Home</Link></h3>
        </>
    )
}