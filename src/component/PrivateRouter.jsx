import React from 'react'
import {Outlet, Navigate} from "react-router-dom"


const PrivateRoute=()=> {
const isAuthenticated = localStorage.getItem('username');
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

const  PrivateRouteLogRes=()=> {
const isAuthenticated = localStorage.getItem('username');
  return isAuthenticated ? <Navigate to="/"/> : <Outlet />;
}
export {PrivateRoute, PrivateRouteLogRes };