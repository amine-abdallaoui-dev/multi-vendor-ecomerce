import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import api from "../../Api/api.js";
import {jwtDecode} from "jwt-decode";


export const admin_login = createAsyncThunk(
    "auth/admin_login",
    async (info,{fulfillWithValue,rejectWithValue}) =>{
        // console.log(info);
        try {
          const {data} = await api.post("/admin-login",info,{withCredentials:true});
            localStorage.setItem("access_token",data.token);
            console.log(data)
           return fulfillWithValue(data)
        }catch(error){
            return rejectWithValue(error.response.data)
        }
    }
)

export const seller_register = createAsyncThunk(
    "auth/seller_register",
    async (info, {fulfillWithValue, rejectWithValue}) =>{
        console.log(info)
       try {
           const {data} = await api.post("/seller-register",info,{withCredentials:true});
           console.log(data)
           localStorage.setItem("access_token",data.token);
           return fulfillWithValue(data)
       }catch(error){
            console.log(error.response.data)
           return rejectWithValue(error.response.data)
       }
    }
)


export const sellerLogin = createAsyncThunk(
    "auth/seller_login",
    async (info, {fulfillWithValue, rejectWithValue}) =>{
        console.log(info)
        try {
            const {data} = await api.post("/seller-login",info,{withCredentials:true});
            console.log(data)
            localStorage.setItem("access_token",data.token);
            return fulfillWithValue(data)
        }catch(error){
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)


export const get_user_info = createAsyncThunk(
    "auth/get_user_info",
    async (_,{fulfillWithValue,rejectWithValue}) =>{
       try {
           const {data} = await api.get("/user_info",{withCredentials:true});
           console.log(data)
           return fulfillWithValue(data)
       }catch(error){
            console.log(error.response.data)
           return rejectWithValue(error.response.data)
       }
    }
)

const get_role = (token)=>{
    if(token){
        const decodeToken = jwtDecode(token)
        const {role,exp} = decodeToken
        console.log(decodeToken)
        if(new Date() > exp){
            return role
        }else{
            return ""
        }
    }else{
        console.log("token not found")
    }
}


const authReducer = createSlice({
    name : "auth",
    initialState : {
        successMessage : "",
        errorMessage : "",
        loader : false ,
        userInfo : "",
        role : get_role(localStorage.getItem("access_token")),
        token : localStorage.getItem("access_token"),
    },
    reducers : {
        clearMessage : (state)=>{
            state.errorMessage = "";
            state.successMessage = "";
        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(admin_login.pending,(state)=>{
            state.loader = true
        })
        .addCase(admin_login.rejected,(state,{payload})=>{
            state.loader = false;
            state.errorMessage = payload.error;
        })
        .addCase(admin_login.fulfilled,(state,{payload})=>{
            state.loader = false;
            state.successMessage = payload.message
            state.token = payload.token;
            state.role = get_role(payload.token)


        })
        .addCase(seller_register.pending,(state)=>{
            state.loader = true
        })
        .addCase(seller_register.rejected,(state,{payload})=>{
            state.loader = false;
            state.errorMessage = payload.error;
        })
        .addCase(seller_register.fulfilled,(state,{payload})=>{
            state.loader = false;
            state.successMessage = payload.message
            state.token = payload.token;
            state.role = get_role(payload.token)

        })
        .addCase(sellerLogin.pending,(state)=>{
            state.loader = true
        })
        .addCase(sellerLogin.rejected,(state,{payload})=>{
            state.loader = false;
            state.errorMessage = payload.error;
        })
        .addCase(sellerLogin.fulfilled,(state,{payload})=>{
            state.loader = false;
            state.successMessage = payload.message
            state.token = payload.token;
            state.role = get_role(payload.token)

        })
            .addCase(get_user_info.fulfilled,(state,{payload})=>{
                state.loader = false;
                state.userInfo = payload.user;

            })
    }
})

export const {clearMessage} = authReducer.actions;
export default authReducer.reducer