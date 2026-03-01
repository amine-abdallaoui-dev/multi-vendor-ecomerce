import React, {useEffect, useState} from 'react';
import { IoImagesOutline } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";


const AddProduct = () => {

    const cats = [
        {
            id: 1,
            name :"bags"
        },
        {
            id: 2,
            name :"shoes"
        },
        {
            id: 3,
            name :"mobile"
        },
        {
            id: 1,
            name :"computers"
        },
        {
            id: 1,
            name :"clothing"
        },
        {
            id: 1,
            name :"food"
        },
        {
            id: 3,
            name :"mobile"
        },
        {
            id: 1,
            name :"computers"
        },
        {
            id: 1,
            name :"clothing"
        },
        {
            id: 1,
            name :"food"
        },

    ]

    const [images , setImages] = useState([])
    const [showimages,setShowImages]   = useState([])
    const handelImages = (e)=>{
        const files = e.target.files;
        const length = files.length;
        const imageUrl = []
        for (let i = 0; i < length; i++) {
            imageUrl.push({url : URL.createObjectURL(files[i])});
        }

        setImages([...images,files])
        setShowImages([...showimages,...imageUrl])
    }

    const handeldeleteImage = (index)=>{
        const filterImages = showimages.filter((img)=>{
            return img !== showimages[index];
        })
        setShowImages(filterImages)
    }

    console.log(showimages)
    return (
        <div className="w-full h-auto ml-0 lg:ml-4 bg-white mt-[120px] lg:my-5 " >
            <form>
                <div className="w-[95%] flex items-center gap-4 mx-4 pt-2 lg:pt-5">
                    <div className="w-full lg:w-6/12">
                        <label className="mb-2 text-gray-900 font-medium text-sm">Product Title :</label>
                        <input className="w-full my-2 outline-none rounded-md text-sm border border-green-300 bg-[#edf5f5] px-3 py-2 focus:border-none focus:outline-green-400"  type="text" placeholder="Product Name"  />
                    </div>
                    <div className="w-full lg:w-6/12 ml-4">
                        <label className="mb-2 text-gray-900 font-medium text-sm">Brand :</label>
                        <input className="w-full my-2 outline-none rounded-md text-sm border border-green-300 bg-[#edf5f5] px-3 py-2 focus:border-none focus:outline-green-400"  type="text" placeholder="Brand Name"  />
                    </div>
                </div>
                <div className="w-[95%] flex items-center gap-4 mx-4 pt-2 lg:pt-5 relative">
                    <div className="w-full lg:w-6/12 ml-4">
                        <label className="mb-2 text-gray-900 font-medium text-sm">Category :</label>
                        <select className="w-full my-2   outline-none rounded-md text-sm border border-green-300 bg-[#edf5f5] px-3 py-2 focus:border-none focus:outline-green-400">
                            {


                                cats.map(cat => {
                                    return (
                                        <option value={cat.name}>{cat.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="w-full lg:w-6/12 ml-4">
                        <label className="mb-2 text-gray-900 font-medium text-sm">Brand :</label>
                        <input className="w-full my-2 outline-none rounded-md text-sm border border-green-300 bg-[#edf5f5] px-3 py-2 focus:border-none focus:outline-green-400"  type="text" placeholder="Brand Name"  />
                    </div>
                </div>
                <div className="w-[95%] flex items-center gap-4 mx-4 pt-2 lg:pt-5">
                    <div className="w-full lg:w-6/12">
                        <label className="mb-2 text-gray-900 font-medium text-sm">Product Price :</label>
                        <input className="w-full my-2 outline-none rounded-md text-sm border border-green-300 bg-[#edf5f5] px-3 py-2 focus:border-none focus:outline-green-400"  type="text" placeholder="Price"  />
                    </div>
                    <div className="w-full lg:w-6/12 ml-4">
                        <label className="mb-2 text-gray-900 font-medium text-sm">Discount :</label>
                        <input className="w-full my-2 outline-none rounded-md text-sm border border-green-300 bg-[#edf5f5] px-3 py-2 focus:border-none focus:outline-green-400"  type="text" placeholder="dicount %"/>
                    </div>
                </div>

                <div className="w-[95%] flex items-center gap-4 mx-4 pt-2 lg:pt-5 relative">
                    <div className="w-full lg:w-full ml-4">
                        <label className="mb-2 text-gray-900 font-medium text-sm">Description :</label>
                        <textarea className="w-full my-2 outline-none rounded-md text-sm border border-green-300 bg-[#edf5f5] px-3 py-2 focus:border-none focus:outline-green-400" cols="10" rows="10"></textarea>
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
                    <input onChange={handelImages} className='hidden' type='file' multiple id="images" name="images"/>

                </div>
                <div className="flex justify-center items-center w-[230px]">
                    <button className="w-full px-3 py-2  mx-6  hover:shadow-md shadow-green-300 text-white my-3 bg-green-400 rounded-md">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;