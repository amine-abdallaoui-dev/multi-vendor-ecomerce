import React from 'react';
import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import {useState} from "react";

const MainLayout = () => {
    const [isVisibel, setIsVisibel] = useState(true)

    return (
        <div className="min-w-screen min-h-screen bg-[#edf5f5] flex gap-2 relative">
            <div className={`${isVisibel ? "left-0" : "left-[-270px]"} w-[260px] min-h-screen z-[99] bg-[#072b2b] md:bg-[#072b2b] fixed top-0 left-0 transition-all`}>
                <Sidebar isVisibel={isVisibel} setIsVisibel={setIsVisibel}/>
            </div>
            <div className='w-full h-[70px] flex    items-center z-20 fixed top-0 left-0 md:left-[260px] bg-white'>

                <Header isVisibel={isVisibel} setIsVisibel={setIsVisibel}/>
            </div>
            <div className= "w-full   m-0 md:ml-[270px] md:mt-[100px]">
                <Outlet/>
            </div>
        </div>

    );
};

export default MainLayout;