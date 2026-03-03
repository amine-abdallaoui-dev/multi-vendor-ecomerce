import React from 'react';
import SearchDataTable from "./components/SearchDataTable.jsx";
import {Link} from "react-router-dom";
import {FaRegTrashAlt, FaUserEdit} from "react-icons/fa";
import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import {useSelector} from "react-redux";
import { IoEyeOutline } from "react-icons/io5";
import Paginition from "./components/Paginition.jsx";



const AllProduct = () => {
    const path = useSelector(state => state.info);

    return (
        <div className="w-full h-auto p-5 bg-white rounded-md shadow-md shadow-green-200/50 overflow-auto">
            <SearchDataTable/>
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
                        [1,2,3,4,5].map((item, index) => {
                            return (
                                <tr className="text-[13px] lg:text-sm font-[400] w-full hover:bg-white">
                                    <td className="w-[12%] text-gray-900 py-4">#757656</td>
                                    <td className="w-[12%] text-gray-900"><img className="w-[40px] h-[40px]" src={`${path.imagesPath}/${item}.jpg`} alt='cat-image'/> </td>
                                    <td className="w-[17%] text-gray-900">product title demo</td>
                                    <td className="w-[12%] text-gray-900">cloathing</td>
                                    <td className="w-[12%] text-gray-900">Nike</td>
                                    <td className="w-[6%] text-gray-900">$134</td>
                                    <td className="w-[9%] text-gray-900">30%</td>
                                    <td className="w-[15%] text-gray-900">123</td>
                                    <td className="w-[12%] pt-3 text-gray-900 flex justify-center items-center gap-2">
                                        <Link className="px-2 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white  flex items-center justify-center"><IoEyeOutline  /></Link>
                                        <Link className="px-2 py-2 rounded-md bg-green-600 hover:shadow-green-700 text-white  flex items-center justify-center"><FaUserEdit  /></Link>
                                        <Link className="px-2 py-2  rounded-md bg-red-500 shadow hover:shadow-red-400 text-white  flex items-center justify-center"><FaRegTrashAlt  /></Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>

            </div>
            <Paginition/>
        </div>
    );
};

export default AllProduct;