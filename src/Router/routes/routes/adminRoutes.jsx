import AdminDashboard from "../../../views/admin/AdminDashboard.jsx";
import AdminOrders from "../../../views/admin/AdminOrders.jsx";
import Category from "../../../views/admin/Category.jsx";
import Sellers from "../../../views/admin/Sellers.jsx";
import PaymentRequests from "../../../views/admin/PaymentRequests.jsx";
import DeactiveSellers from "../../../views/admin/DeactiveSellers.jsx";
import SellersRequests from "../../../views/admin/SellersRequests.jsx";
import SellersChat from "../../../views/admin/SellersChat.jsx";


export const adminRoutes = [
    {
        path: 'admin/dashboard',
        element : <AdminDashboard/>,
        role : 'admin',
    },
    {
        path: 'admin/dashboard/orders',
        element: <AdminOrders/>,
        role : 'admin'
    },
    {
        path: "admin/dashboard/category",
        element: <Category/>,
        role :"admin"
    },
    {
        path: "admin/dashboard/sellers",
        element: <Sellers/>,
        role :"admin"
    },
    {
        path: "admin/dashboard/payment-requests",
        element: <PaymentRequests />,
        role :"admin"
    },
    {
        path: "admin/dashboard/deactive-sellers",
        element: <DeactiveSellers />,
        role :"admin"
    },
    {
        path: "admin/dashboard/sellers-requests",
        element: <SellersRequests />,
        role :"admin"
    },
    {
        path: "admin/dashboard/sellers-chat",
        element: <SellersChat />,
        role :"admin"
    }

]