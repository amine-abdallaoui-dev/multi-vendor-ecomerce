import React, {useEffect, useState} from 'react';
import SearchDataTable from "./components/SearchDataTable.jsx";
import {Link} from "react-router-dom";
import {FaRegTrashAlt, FaUserEdit} from "react-icons/fa";
import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import {useDispatch, useSelector} from "react-redux";
import { IoEyeOutline } from "react-icons/io5";
import {getProducts} from "../../store/reducers/productReducer.js";
import Pagination from "../admin/components/Pagination.jsx";



const AllProduct = () => {
    const {products,productsCount} = useSelector(state => state.product);
    const dispatch = useDispatch();
    const [parPage , setParPage] = useState(5);
    const [page , setPage] = useState(1);
    const [searchValue , setSearchValue] = useState("");

    const info = {
        pageNumber : page,
        parPage : parPage,
        searchValue : searchValue
    }
    useEffect(() => {
        dispatch(getProducts(info))
    }, [info.pageNumber,info.parPage,info.searchValue]);


    return (
        <div className="w-full h-auto p-5 bg-white rounded-md shadow-md shadow-green-200/50 overflow-auto">
            <SearchDataTable  setParPage={setParPage}  searchValue={searchValue} setSearchValue={setSearchValue}/>
            <div className="w-[200%] lg:w-full md:-w-full  lg:mr-[100px] lg-pdx-[100px] ml-0 bg-[#edf5f5] p-5 mt-[10px] h-auto md:overflow-hidden overflow-x-scroll mb-[20px]">
                <table className="w-full h-auto overflow-y-scroll overflow-x-scroll sm:overflow-x-scroll  md:overflow-x-scroll lg:overflow-x-hidden">
                    <tr className="text-[13px] lg:text-sm font-medium border-b border-gray-600">
                        <td className="w-[12%] text-gray-900 py-4">Id</td>
                        <td className="w-[12%] text-gray-900">Image</td>
                        <td className="w-[17%] text-gray-900">Name</td>
                        <td className="w-[12%] text-gray-900">category</td>
                        <td className="w-[12%] text-gray-900">Brand</td>
                        <td className="w-[6%]] text-gray-900">Price</td>
                        <td className="w-[9%] text-gray-900">Discount</td>
                        <td className="w-[15%] text-gray-900">Stock</td>
                        <td className="w-[12%] text-gray-900">Action</td>
                    </tr>
                    {
                        products.map((item, index) => {
                            return (
                                <tr className="text-[13px] lg:text-sm font-[400] w-full hover:bg-white">
                                    <td className="w-[12%] text-gray-900 py-4">{index + 1}</td>
                                    <td className="w-[12%] text-gray-900"><img className="w-[40px] h-[40px]" src={item.images[0]} alt='cat-image'/> </td>
                                    <td className="w-[17%] text-gray-900">{item.title.length > 15 ? item.title.slice(0,15)+"..." : item.title}</td>
                                    <td className="w-[12%] text-gray-900">{item.category}</td>
                                    <td className="w-[12%] text-gray-900">{item.brand}</td>
                                    <td className="w-[6%] text-gray-900">{`$${item.price}`}</td>
                                    <td className="w-[9%] text-gray-900">{`${item.discount > 0 ? item.discount+"%" : "No discount"}`}</td>
                                    <td className="w-[15%] text-gray-900">{item.stock}</td>
                                    <td className="w-[12%] pt-3 text-gray-900 flex justify-center items-center gap-2">
                                        <Link className="px-2 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white  flex items-center justify-center"><IoEyeOutline  /></Link>
                                        <Link to={`/seller/dashboard/allProducts/edit/${item._id}`} className="px-2 py-2 rounded-md bg-green-600 hover:shadow-green-700 text-white  flex items-center justify-center"><FaUserEdit  /></Link>
                                        <Link className="px-2 py-2  rounded-md bg-red-500 shadow hover:shadow-red-400 text-white  flex items-center justify-center"><FaRegTrashAlt  /></Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>

            </div>
            <Pagination
                pageNumber={page} setPageNumber ={setPage}  perPage={parPage}  totalItems={productsCount} showItem={Math.ceil( productsCount / parPage ) }
            />
        </div>
    );
};

export default AllProduct;