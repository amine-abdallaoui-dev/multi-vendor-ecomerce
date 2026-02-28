import { MdSpaceDashboard } from "react-icons/md";

import { MdBorderColor } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { AiFillDashboard } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import { FaExpeditedssl } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";

import { ImUsers } from "react-icons/im";
import AdminOrders from "../views/admin/AdminOrders.jsx";




export const allNavs = [
    {
       id : 1,
       title : "Dashboard" ,
        icon : <AiFillDashboard />,
        role : "admin",
        path : "/admin/dashboard",
    },
    {
        path: 'admin/dashboard/orders',
        title : "Orders",
        icon : <MdBorderColor />,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/category',
        element : "",
        title : "Categories",
        icon : <BiSolidCategory />,
        role : 'admin'
    },
    {
        path: "admin/dashboard/sellers",
        title : "Sellers",
        icon : <FaUsers />,
        role : 'admin'
    },
    {
        path: "admin/dashboard/payment-requests",
        title: 'Payment Request',
        icon : <MdOutlinePayments />,
        role : 'admin'
    },
    {
        path: "admin/dashboard/deactive-sellers",
        element : "" ,
        title : "Deactive Sellers",
        icon : <FaExpeditedssl />,
        role : 'admin'
    },
    {
        path: "admin/dashboard/sellers-requests",
        title: 'Sellers Request',
        icon : <ImUsers />,
        role : 'admin'
    },

    {
        path: 'admin/dashboard/chat-sellers',
        title: 'Chat sellers',
        icon: <IoIosChatboxes/>,
        role : 'admin'
    },

    {
        path: '/logout',
        title : "Logout",
        icon : <LuLogOut/>,
        role : 'admin'
    },


]