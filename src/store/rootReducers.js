import authReducer from "./reducers/authreducer";
import appInfo from "./reducers/appInfo.js";
import categoryReducer from "./reducers/categoryReducer.js";
import productReducer from "./reducers/productReducer.js";

const rootReducer = {
    auth : authReducer,
    info : appInfo,
    category : categoryReducer,
    product : productReducer
    
}



export default rootReducer;