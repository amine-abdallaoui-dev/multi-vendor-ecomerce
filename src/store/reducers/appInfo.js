import {createSlice} from "@reduxjs/toolkit";

const appInfo = createSlice({
    name : "info",
    initialState : {
        appUrl : "http://localhost:5173/",
        imagesPath : "http://localhost:5173/images"
    },
    reducers : {

    },
    extraReducers : ()=>{

    }

})

export default appInfo.reducer;