import authReducer from "./reducers/authreducer";
import appInfo from "./reducers/appInfo.js";

const rootReducer = {
    auth : authReducer,
    info : appInfo,
    
}



export default rootReducer;