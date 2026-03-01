import AdminDashboard from "../../../views/admin/AdminDashboard.jsx";
import Home from "../../../views/seller/Home.jsx";
import SellerDashboard from "../../../views/seller/SellerDashboard.jsx";
import AddProduct from "../../../views/seller/AddProduct.jsx";
import AllProduct from "../../../views/seller/AllProduct.jsx";
import DiscountProduct from "../../../views/seller/DiscountProduct.jsx";


export const sellerRoutes = [
    {
        path: '/',
        element : <Home/>,
        ability : ["admin","seller"]
    },
    {
        path: 'seller/dashboard',
        element : <SellerDashboard/>,
        ability : ["seller"]
    },
    {
        path: 'seller/dashboard/add-product',
        element : <AddProduct/>,
        ability : ["seller"]
    },
    {
        path: 'seller/dashboard/all-product',
        element : <AllProduct/>,
        ability: ["seller"]
    },
    {
        path: 'seller/dashboard/discount/products',
        element : <DiscountProduct/>,
        ability: ["seller"]
    }
]