import React from 'react'
import Login from "../../../views/auth/Login"
import Register from "../../../views/auth/Register";
import AdminLogin from '../../../views/auth/AdminLolgin';
import SellerDashboard from "../../../views/seller/SellerDashboard.jsx";
import Home from "../../../views/seller/Home.jsx";
import Unauthorize from "../../../views/Unauthorize.jsx";
export const publicRoutes = [

    {
        path: '/',
        element : <Home/>,

    },
    {
        path : "/login",
        element : <Login/>
    },
    {
        path : "/register" ,
        element : <Register/>
    },
    {
        path:"admin/login",
        element : <AdminLogin/>
    },
    {
        path:"/Unauthorized",
        element: <Unauthorize/>
    }
]

export default publicRoutes;