import React from 'react';
import {Link, useLocation} from "react-router-dom";

const NavItem = ({item}) => {
    const {pathname} = useLocation();
console.log(pathname)
    return (
        <Link to={`${item.path}`}>
            <li className={`flex items-center gap-4 py-2 ${pathname === item.path ? "bg-[#0f4749]" : "" } hover:bg-[#0f4749]`}>

                <span className=" text-white pl-2">{item.icon}</span>
                <span className="text-[#edf5f5] font-[400]">{item.title}</span>

            </li>

        </Link>
    );
};

export default NavItem;