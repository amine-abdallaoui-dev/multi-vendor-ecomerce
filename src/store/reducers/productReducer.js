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


export const getProducts = createAsyncThunk(
    'products/getProducts',
    async ({pageNumber,parPage,searchValue},{fulfillWithValue,rejectWithValue}) => {
        try {
            const {data} = await api.get(`/get-products?page=${pageNumber}&&parPage=${parPage}&&search=${searchValue}`, {withCredentials: true});
            return fulfillWithValue(data);
        }catch(error) {
            return rejectWithValue(error.response.data);
        }
    }
)


export const getProductById = createAsyncThunk(
    'products/getProductById',
    async ({productId},{fulfillWithValue,rejectWithValue}) => {
       console.log(productId)
        try {
            const {data} = await api.get(`/get-edit-product/${productId}`,{withCredentials:true});
            console.log(data);
            return fulfillWithValue(data);
        }catch(error) {
            return rejectWithValue(error.message);
        }
    }
)


export const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async (product,{fulfillWithValue,rejectWithValue}) => {
        try{

            const {data} = await  api.post("/update-product",product,{withCredentials:true});
            console.log(data);
            return fulfillWithValue(data);
        }catch (err){
            console.log(err.response.data);
        }
    }
)

export const updateImages = createAsyncThunk(
    'products/updateImages',
        async ({oldImage,newImage,productId},{fulfillWithValue,rejectWithValue}) => {
            let fromData = new FormData();
            fromData.append('newImage',newImage);
            fromData.append('oldImage',oldImage);
            fromData.append('productId',productId);
            try {
                const {data} = await api.post("/update-images",fromData,{withCredentials:true});
                console.log(data);
                return fulfillWithValue(data);
            }catch (error) {
                console.log(error);
                return rejectWithValue(error);
            }
        }
)
const productReducer = createSlice({
    name : 'product',
    initialState : {
        successMessage : "",
        errorMessage : "",
        loader : false,
        imageLoader : false,
        products : [],
        productsCount : "",
        categories : [],
        product : ""
    },
    reducers : {
        clearMessage : (state) => {
            state.successMessage = "";
            state.errorMessage = "";
        },

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
            .addCase(getProducts.fulfilled,(state,{payload})=>{
                state.products = [...payload.products];
                state.productsCount = payload.productsCount;
            })
            .addCase(getProductById.fulfilled,(state,{payload})=>{
                state.product = payload.product;
            })
            .addCase(updateProduct.pending,(state)=>{
                state.loader = true;
            })
            .addCase(updateProduct.rejected,(state,{payload})=>{
                state.loader = false;
                state.errorMessage = payload.error
            })
            .addCase(updateProduct.fulfilled,(state,{payload})=>{
                state.loader = false;
                state.successMessage = payload.message;
                state.product = payload.product;
            })
            .addCase(updateImages.pending,(state,{payload})=>{
                state.imageLoader = true;
            })
            .addCase(updateImages.fulfilled,(state,{payload})=>{
                state.imageLoader = false;
                state.successMessage = payload.message;
                state.product = payload.product;
            })
    }
})

export const {clearMessage}  = productReducer.actions;
export default productReducer.reducer;