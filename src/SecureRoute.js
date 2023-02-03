import axios from "axios";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router'

const PrivateRoute = (props) => {
  let navi = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3001/").then((response) => {

      if (response.data.loggedIn == false) {

        navi("/")

      }

    });
  }, []);


  return <Outlet />


}

export default PrivateRoute;