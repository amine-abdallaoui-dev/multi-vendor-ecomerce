import AdminDashboard from "../../../views/admin/AdminDashboard.jsx";
import AdminOrders from "../../../views/admin/AdminOrders.jsx";


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
    }
]