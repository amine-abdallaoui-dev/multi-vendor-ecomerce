import React, {useEffect, useState} from 'react';

import {getAllNavs} from "../navigation/index.js";
import NavItem from "./NavItem.jsx";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

const Sidebar = () => {
    const [state, setState] = useState([])
    const allNavs = getAllNavs("seller")
    const imagesPath = useSelector(state=>state.info)
    useEffect(()=>{
        setState(allNavs)

    },[])
    console.log(state)
    return (
        <>
            <div className="w-full h-[90px] flex justify-start pl-5 items-center">
                <img src={`${imagesPath.imagesPath}/logo.png`} className="w-[150px]" alt="logo"/>
            </div>
        <ul className="px-5 py-2">
            {
                state.map((item,index) => {
                    return <NavItem item={item} key={index}/>
                })
            }

        </ul>
        </>
    );
};

export default Sidebar;