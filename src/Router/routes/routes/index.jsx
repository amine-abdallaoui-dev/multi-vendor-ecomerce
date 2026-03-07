import {privateRoutes} from "./PrivateRoutes.jsx";
import MainLayout from "../../../Layout/MainLayout.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";


export const getRoutes = ()=>{

    privateRoutes.map((route)=>{
       route.element = <ProtectedRoutes route={route}>{route.element}</ProtectedRoutes>
    })


    return {
        path : "/",
        element : <MainLayout/>,
        children : privateRoutes
    }
}