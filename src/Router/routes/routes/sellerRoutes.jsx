import AdminDashboard from "../../../views/admin/AdminDashboard.jsx";
import Home from "../../../views/seller/Home.jsx";
import SellerDashboard from "../../../views/seller/SellerDashboard.jsx";
import AddProduct from "../../../views/seller/AddProduct.jsx";
import AllProduct from "../../../views/seller/AllProduct.jsx";
import DiscountProduct from "../../../views/seller/DiscountProduct.jsx";
import OrderDetails from "../../../views/seller/OrderDetails.jsx";
import Orders from "../../../views/seller/Orders.jsx";
import SellerPaymentRequests from "../../../views/seller/SellerPaymentRequests.jsx";
import ChatSupport from "../../../views/seller/ChatSupport.jsx";
import ChatCustomer from "../../../views/seller/ChatCustomer.jsx";
import Profile from "../../../views/seller/profile.jsx";
import EditProduct from "../../../views/seller/EditProduct.jsx";


export const sellerRoutes = [

    {
        path: '/seller/dashboard',
        element : <SellerDashboard/>,
        role : "seller"
    },
    {
        path: 'seller/dashboard/add-product',
        element : <AddProduct/>,
        role : "seller"
    },
    {
        path: '/seller/dashboard/all-product',
        element : <AllProduct/>,
        role : "seller"
    },
    {
        path: 'seller/dashboard/discount/products',
        element : <DiscountProduct/>,
        role : "seller"
    },
    {
        path: 'seller/dashboard/orders',
        element : <Orders/>,
        role : 'seller',
        visibility : ['active','deactive']
    },
    {
        path: 'seller/dashboard/order/details/:orderId',
        element : <OrderDetails/>,
        role : 'seller',
        visibility : ['active','deactive']
    },
    {
        path: '/seller/dashboard/payments',
        element : <SellerPaymentRequests/>,
        role : 'seller',
        status : 'active'
    },
    {
        path: '/seller/dashboard/chat-support',
        element : <ChatSupport/>,
        role : 'seller',
        visibility : ['active','deactive','pending']
    },
    {
        path: 'seller/dashboard/chat-customer',
        element : <ChatCustomer/>,
        role : 'seller',
        status : 'active'
    },
    {
        path: 'seller/dashboard/profile',
        element : <Profile/>,
        role : 'seller',
        status : 'active'
    },
    {
        path: 'seller/dashboard/allProducts/edit/:productId',
        element : <EditProduct/>,
        role : 'seller',
        status : 'active'
    },

]