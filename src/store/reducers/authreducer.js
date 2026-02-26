import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import api from "../../Api/api.js";


export const admin_login = createAsyncThunk(
    "auth/admin_login",
    async (info,{fulfillWithValue,rejectWithValue}) =>{
        // console.log(info);
        try {
          const {data} = await api.post("/admin-login",info,{withCredentials:true});
            localStorage.setItem("accessToken",data.token);
            console.log(data)
           return fulfillWithValue(data)
        }catch(error){
            return rejectWithValue(error.response.data)
        }
    }
)



const authReducer = createSlice({
    name : "auth",
    initialState : {
        successMessage : "",
        errorMessage : "",
        loader : false ,
        userInfo : ""
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
        })
    }
})

export const {clearMessage} = authReducer.actions;
export default authReducer.reducer