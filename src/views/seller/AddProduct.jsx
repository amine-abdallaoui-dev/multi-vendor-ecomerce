import React, {useEffect, useState} from 'react';
import { IoImagesOutline } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import {addProduct, clearMessage, getCategory} from "../../store/reducers/productReducer.js";
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import {PulseLoader} from "react-spinners";



const AddProduct = () => {


    const [product,setProduct] = useState({
        title :"",
        brands : "",
        category:"",
        price : "",
        description : "",
        discount : "",
        stock : "",
        images : ""
    });


    const [images , setImages] = useState([])
    const [showimages,setShowImages]   = useState([])
    const dispatch = useDispatch();
    const {loader,successMessage,errorMessage,categories} = useSelector(state=>state.product)
    const handelImages = (e)=>{
        const files = e.target.files;
        const length = files.length;
        const imageUrl = []
        for (let i = 0; i < length; i++) {
            imageUrl.push({url : URL.createObjectURL(files[i])});
        }
        setImages(files)


        setShowImages([...showimages,...imageUrl])
    }

    const handeldeleteImage = (index)=>{
        const filterImages = showimages.filter((img)=>{
            return img !== showimages[index];
        })
        setShowImages(filterImages)
    }




    const handelFormSubmit = (e)=>{
        e.preventDefault()
        const uploaded = [];
        for (let i = 0; i < images.length ; i++) {
            uploaded.push(images[i])
        }
        dispatch(addProduct({
            ...product,
            images : uploaded
        }))
    }
    useEffect(()=>{
        if(errorMessage !== ""){
            toast.error(errorMessage);
            dispatch(clearMessage())
        }
        if(successMessage !== ""){
            toast.success(successMessage)
            dispatch(clearMessage())
            setProduct({
                title :"",
                brands : "",
                category:"",
                price : "",
                description : "",
                discount : "",
                stock : "",
                images : ""
            })
            setShowImages([])
            setImages([])

        }
    },[errorMessage,successMessage])

    useEffect(() => {
        dispatch(getCategory())
        console.log("this categories " + categories.name)
    }, []);

    return (
        <div className="w-full h-auto ml-0 lg:ml-4 bg-white mt-[120px] lg:my-5 " >
            <form onSubmit={handelFormSubmit}>
                <div className="w-[95%] flex items-center gap-4 mx-4 pt-2 lg:pt-5">
                    <div className="w-full lg:w-6/12">
                        <label className="mb-2 text-gray-900 font-medium text-sm">Product Title :</label>
                        <input value={product.title} onChange={(e)=>setProduct({...product,title:e.target.value})} name='title' className="w-full my-2 outline-none rounded-md text-sm border border-green-300 bg-[#edf5f5] px-3 py-2 focus:border-none focus:outline-green-400"  type="text" placeholder="Product Name"  />
                    </div>
                    <div className="w-full lg:w-6/12 ml-4">
                        <label className="mb-2 text-gray-900 font-medium text-sm">Brand :</label>
                        <input value={product.brands} onChange={(e)=>setProduct({...product,brands:e.target.value})}name="brand" className="w-full my-2 outline-none rounded-md text-sm border border-green-300 bg-[#edf5f5] px-3 py-2 focus:border-none focus:outline-green-400"  type="text" placeholder="Brand Name"  />
                    </div>
                </div>
                <div className="w-[95%] flex items-center gap-4 mx-4 pt-2 lg:pt-5 relative">
                    <div className="w-full lg:w-6/12 ml-4">
                        <label className="mb-2 text-gray-900 font-medium text-sm">Category :</label>
                        <select value={product.category} onChange={(e)=>setProduct({...product,category:e.target.value})} name="category" className="w-full my-2   outline-none rounded-md text-sm border border-green-300 bg-[#edf5f5] px-3 py-2 focus:border-none focus:outline-green-400">
                            {


                                categories.map(cat => {
                                    return (
                                        <>
                                            <option>Select ...</option>
                                            <option value={cat.name}>{cat.name}</option>
                                        </>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="w-full lg:w-6/12 ml-4">
                        <label className="mb-2 text-gray-900 font-medium text-sm">Stock :</label>
                        <input value={product.stock} onChange={(e)=>setProduct({...product,stock:e.target.value})} name="stock" className="w-full my-2 outline-none rounded-md text-sm border border-green-300 bg-[#edf5f5] px-3 py-2 focus:border-none focus:outline-green-400"  type="text" placeholder="Brand Name"  />
                    </div>
                </div>
                <div className="w-[95%] flex items-center gap-4 mx-4 pt-2 lg:pt-5">
                    <div className="w-full lg:w-6/12">
                        <label className="mb-2 text-gray-900 font-medium text-sm">Product Price :</label>
                        <input value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})} name="price" className="w-full my-2 outline-none rounded-md text-sm border border-green-300 bg-[#edf5f5] px-3 py-2 focus:border-none focus:outline-green-400"  type="text" placeholder="Price"  />
                    </div>
                    <div className="w-full lg:w-6/12 ml-4">
                        <label className="mb-2 text-gray-900 font-medium text-sm">Discount :</label>
                        <input value={product.discount} onChange={(e)=>setProduct({...product,discount:e.target.value})} name="discount" className="w-full my-2 outline-none rounded-md text-sm border border-green-300 bg-[#edf5f5] px-3 py-2 focus:border-none focus:outline-green-400"  type="text" placeholder="dicount %"/>
                    </div>
                </div>

                <div className="w-[95%] flex items-center gap-4 mx-4 pt-2 lg:pt-5 relative">
                    <div className="w-full lg:w-full ml-4">
                        <label className="mb-2 text-gray-900 font-medium text-sm">Description :</label>
                        <textarea value={product.description} onChange={(e)=>setProduct({...product,description:e.target.value})} name="description" className="w-full my-2 outline-none rounded-md text-sm border border-green-300 bg-[#edf5f5] px-3 py-2 focus:border-none focus:outline-green-400" cols="10" rows="10"></textarea>
                    </div>
                </div>

                <div className="w-[95%] ml-7 lg:ml-7 pt-2 lg:pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        showimages.map((image,index) => {
                            return (
                                <div className="w-full h-[160px] relative my-3">
                                    <img className="w-full max-h-full" src={image.url} alt="image"/>
                                    <div onClick={()=>handeldeleteImage(index)} className=" cursor-pointer flex items-center justify-center absolute top-1 right-0 px-2 py-2 rounded-full bg-gray-800 text-white">
                                        <IoCloseCircle className="cursor-pointer"/>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <label htmlFor='images' className="flex flex-col bg-[#edf5f5] my-3 justify-center items-center border border-dashed w-full h-[160px] border-green-500 ">
                        <span><IoImagesOutline className="text-gray-800"/></span>
                        <span className="text-gray-800 text-sm">Upload Images</span>
                    </label>
                    <input  onChange={handelImages } className='hidden' type='file' multiple id="images" name="images"/>

                </div>
                <div className="flex justify-center items-center w-[230px]">
                    <button
                        type="submit"
                        disabled={loader ? true : false}
                        className="w-full mx-2 mt-3 mb-8 bg-opacity-100 bg-green-400 py-3 rounded-lg border-white border hover:bg-green-900 text-white hover:shadow-md hover:shadow-gray-700/50"
                    >
                        {loader ? <PulseLoader color={"white"} /> : "Add Category"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;