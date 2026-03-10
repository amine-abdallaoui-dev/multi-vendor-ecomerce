import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../Api/api.js";





export const addCategory = createAsyncThunk(
    "categoryAdd",
    async ({name,image},{fulfillWithValue,rejectWithValue}) => {
        console.log(name,image);
        try{
            const formData = new FormData();
            formData.append("name", name);
            formData.append("image", image);
            const {data} = await api.post("/add-category",formData,{withCredentials:true});
            console.log(data);
            return fulfillWithValue(data);

        }catch(error){
            console.log(error.response.data)
            return rejectWithValue(error.response.data);
        }
    }
)

export const getCategory = createAsyncThunk(
    "category/get_category",
    async ({searchValue,parPage,page},{fulfillWithValue,rejectWithValue} )=> {
        try {
            const {data} = await api.get(`/get-category?searchValue=${searchValue}&&parPage=${parPage}&&page=${page}`,{withCredentials:true});
            console.log(data);
            return fulfillWithValue(data);
        }catch(error){
            console.log(error.response.data)
            return rejectWithValue(error.response.data);
        }

    }
)


const categoryReducer = createSlice({
    name: "category",
    initialState: {
        successMessage: "",
        errorMessage: "",
        loader : false,
        categories: [],
        categoriesCount : 0
    },
    reducers : {
        clearMessage : (state) => {
            state.successMessage = "";
            state.errorMessage = "";
        }
    },
    extraReducers : (builder)=>{
        builder
            .addCase(addCategory.pending,(state)=>{
                state.loader = true;
            })
            .addCase(addCategory.rejected,(state,{payload})=>{
                state.loader = false;
                state.errorMessage = payload.error
            })
            .addCase(addCategory.fulfilled,(state,{payload})=>{
                state.loader = false;
                state.successMessage = payload.message;
                state.categories = [...state.categories,payload.categories];
            })
            .addCase(getCategory.fulfilled,(state,{payload})=>{
                state.categoriesCount = payload.CategoriesCount
                state.categories = payload.categories
            })

    }
})

export const {clearMessage} = categoryReducer.actions;
export default categoryReducer.reducer;