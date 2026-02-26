import AdminDashboard from "../../../views/admin/AdminDashboard.jsx";
import Home from "../../../views/seller/Home.jsx";


export const sellerRoutes = [
    {
        path: '/',
        element : <Home/>,
        ability : ["admin","seller"]
    }
]