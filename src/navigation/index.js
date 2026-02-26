import {allNavs} from "./allNavs.jsx";


export const getAllNavs = (role)=>{
    const finalRoute = [];
        for (let i = 0; i < allNavs.length; i++) {
            if (role === allNavs[i].role) {
                finalRoute.push(allNavs[i]);
            }
        }

        return finalRoute;
}