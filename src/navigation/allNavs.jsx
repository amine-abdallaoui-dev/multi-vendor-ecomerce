
import { MdBorderColor } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { AiFillDashboard } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import { FaExpeditedssl } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { ImUsers } from "react-icons/im";
import { FaProductHunt } from "react-icons/fa6";
import { FaCartFlatbed } from "react-icons/fa6";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { MdOutlineBorderColor } from "react-icons/md";
import { FaRocketchat } from "react-icons/fa";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";








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
        path: "admin/dashboard/sellers-chat",
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
    {
        path: 'seller/dashboard',
        title : "Dashboard",
        icon : <AiFillDashboard />,
        role : 'seller'
    },
    {
        path: 'seller/dashboard/add-product',
        title : "Add Product",
        icon : <FaProductHunt />,
        role : 'seller'
    },
    {
        path: 'seller/dashboard/all-product',
        title : "All Products",
        icon : <FaCartFlatbed />,
        role : 'seller'
    },
    {
        path: 'seller/dashboard/discount/products',
        title : "ALl Discounts",
        icon : <TbShoppingCartDiscount />,
        role : 'seller'
    },
    {
        path: 'seller/dashboard/orders',
        title : "Orders",
        icon : <MdOutlineBorderColor />,
        role : 'seller'
    },

    {
        path: 'seller/dashboard/payments',
        title : "Payment Request",
        icon : <MdOutlinePayments />,
        role : 'seller'
    },
    {
        path: 'seller/dashboard/chat-customer',
        title : "Customer chat",
        icon : <IoChatboxEllipsesSharp />,
        role : 'seller'
    },
    {
        path: 'seller/dashboard/chat-support',
        title : "Support chat",
        icon : <FaRocketchat />,
        role : 'seller'
    },
    {
        path: 'seller/dashboard/profile',
        title : "Profile",
        icon : <CgProfile />,
        role : 'seller'
    },






    // start seller navigations



]