import React from 'react';
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const Home = () => {

    const state = useSelector(state=>state.auth);

    if (state.role === "admin") return <Navigate to="/admin/dashboard" replace></Navigate>
    else if (state.role === "seller") return <Navigate to="/seller/dashboard" replace></Navigate>
    else return <Navigate to="/login" replace></Navigate>

};

export default Home;