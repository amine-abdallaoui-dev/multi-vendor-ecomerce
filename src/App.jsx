import React, {useEffect, useState} from 'react'
import publicRoutes from "./Router/routes/routes/publicRoutes"
import Router from './Router/routes/router'
import {getRoutes} from "./Router/routes/routes/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {get_user_info} from "./store/reducers/authreducer.js";

export default function App() {
  
  const [allRoutes,setAllRoutes] = useState([...publicRoutes])

  const routes = getRoutes()
    const dispatch = useDispatch()
    const {token} = useSelector(state => state.auth)
  useEffect(() => {
    setAllRoutes([
        ...allRoutes,
        routes
    ])
  },[])

    useEffect(() => {
        if(token){
            dispatch(get_user_info())
        }
    },[token])

  return <Router allRoutes={allRoutes}/>

}
