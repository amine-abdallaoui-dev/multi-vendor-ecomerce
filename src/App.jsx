import React, {useEffect, useState} from 'react'
import publicRoutes from "./Router/routes/routes/publicRoutes"
import Router from './Router/routes/router'
import {getRoutes} from "./Router/routes/routes/index.jsx";

export default function App() {
  
  const [allRoutes,setAllRoutes] = useState([...publicRoutes])

  const routes = getRoutes()
  useEffect(() => {
    setAllRoutes([
        ...allRoutes,
        routes
    ])
  },[])


  return <Router allRoutes={allRoutes}/>

}
