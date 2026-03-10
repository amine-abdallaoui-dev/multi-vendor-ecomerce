import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../Api/api.js";




export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (product,{fulfillWithValue,rejectWithValue}) => {
        const formData = new FormData();
        formData.append("title", product.title);
        formData.append("stock", product.stock);
        formData.append("brand", product.brands);
        formData.append("price", product.price);
        formData.append("description", product.description);
        formData.append("discount", product.discount);
        formData.append("category", product.category);

        for (let i = 0; i < product.images.length; i++) {
            formData.append("images", product.images[i]);

        }
        try {
            const {data} = await api.post("/add-product",formData,{withCredentials: true});
            console.log(data);
            return fulfillWithValue(data);
        }catch(error) {
            return rejectWithValue(error);
        }
    }
)

export const getCategory = createAsyncThunk(
    'products/getCategory',
    async (_,{fulfillWithValue,rejectWithValue}) => {
        try {
            const {data} = await api.get("/get-category",{withCredentials: true});
            console.log(data);
            return fulfillWithValue(data);
        }catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
)


const productReducer = createSlice({
    name : 'product',
    initialState : {
        successMessage : "",
        errorMessage : "",
        loader : false,
        products : [],
        categories : [],
    },
    reducers : {
        clearMessage : (state) => {
            state.successMessage = "";
            state.errorMessage = "";
        }
    },
    extraReducers : (builder)=>{
        builder
            .addCase(addProduct.pending,(state)=>{
                state.loader = true;
            })
            .addCase(addProduct.rejected,(state,{payload})=>{
                state.loader = false;
                state.errorMessage = payload.error
            })
            .addCase(addProduct.fulfilled,(state,{payload})=>{
                state.loader = false;
                state.successMessage = payload.message;
            })
            .addCase(getCategory.fulfilled,(state,{payload})=>{
                state.categories = [...payload.categories];
            })

    }
})

export const {clearMessage}  = productReducer.actions;
export default productReducer.reducer;