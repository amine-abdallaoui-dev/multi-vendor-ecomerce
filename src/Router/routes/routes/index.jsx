import {privateRoutes} from "./privateRoutes.js";
import MainLayout from "../../../Layout/MainLayout.jsx";


export const getRoutes = ()=>{
    return {
        path : "/",
        element : <MainLayout/>,
        children : privateRoutes
    }
}