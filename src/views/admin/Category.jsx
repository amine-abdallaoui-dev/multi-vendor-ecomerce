import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import {useSelector} from "react-redux";
import { FaUserEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoImagesSharp } from "react-icons/io5";
import { AiFillCloseSquare } from "react-icons/ai";
import SearchDataTable from "../seller/components/SearchDataTable.jsx";






const Category = () => {
    const path = useSelector(state => state.info);
    const [show, setShow] = useState(false);
    return (
        <div className="flex w-full gap-3">
            <div className="w-full lg:w-7/12 h-auto p-5 bg-white rounded-md shadow-md shadow-green-200/50">
                <SearchDataTable/>
                <div className="lg:hidden w-full flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-900">Add Category</h2>
                    <button onClick={()=>setShow(!show)} className="px-5 py-2 bg-green-600 text-white rounded-md">Add</button>
                </div>
                <div className="w-full  lg:mr-[100px] lg-pdx-[100px] ml-0 bg-[#edf5f5] p-5 mt-[10px] h-auto md:overflow-hidden overflow-auto mb-[20px]">
                    <table className="w-full h-auto overflow-y-scroll overflow-x-scroll sm:overflow-x-scroll  md:overflow-x-scroll lg:overflow-x-hidden">
                        <tr className="text-[13px] lg:text-sm font-medium border-b border-gray-600">
                            <td className="w-[20%] text-gray-900 py-4">Id</td>
                            <td className="w-[20%] text-gray-900">Image</td>
                            <td className="w-[20%] text-gray-900">Name</td>
                            <td className="w-[20%] text-gray-900">Action</td>
                        </tr>
                        {
                            [1,2,3,4,5].map((item, index) => {
                                return (
                                    <tr className="text-[13px] lg:text-sm font-[400] w-full hover:bg-white">
                                        <td className="w-[20%] text-gray-900 py-4">#757656</td>
                                        <td className="w-[20%] text-gray-900"><img className="w-[40px] h-[40px]" src={`${path.imagesPath}/${item}.jpg`} alt='cat-image'/> </td>
                                        <td className="w-[20%] text-gray-900">electronics</td>
                                        <td className="w-[20%] pt-3 text-gray-900 flex justify-center items-center gap-2">
                                            <Link className="px-2 py-2 rounded-md bg-green-600 hover:shadow-green-700 text-white  flex items-center justify-center"><FaUserEdit  /></Link>
                                            <Link className="px-2 py-2  rounded-md bg-red-500 shadow hover:shadow-red-400 text-white  flex items-center justify-center"><FaRegTrashAlt  /></Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>

                    </div>
                    <div className="w-[95%] flex justify-end mr-10 gap-1 items-center mb-3 text-[13px] lg:text-sm">
                            <span className="py-3 px-3 rounded-md bg-[#069f96] text-white  font-medium hover:bg-green-400">
                                <FaArrowLeftLong/>
                            </span>
                        <span className="py-1 px-3 rounded-md bg-[#069f96] text-white font-medium hover:bg-green-400">1</span>
                        {
                            [1,2,3,4,5].map((item,index) => {
                                return (
                                    <span className="py-1 px-3 rounded-md bg-gray-400 text-white font-medium hover:bg-green-400">{item}</span>
                                )
                            })
                        }
                        <span className="py-3 px-3 rounded-md bg-[#069f96] text-white font-medium hover:bg-green-400">
                                <FaArrowRightLong/>
                            </span>
                    </div>
            </div>
            <div className={`w-[300px] transition-all duration-500 lg:w-4/12 bg-[#0f4749] lg:bg-white  absolute ${show ? "right-[0px]" : "right-[-650px]" }  lg:right-0 h-screen lg:h-auto z-[99]  rounded-md shadow-md shadow-green-200/50`}>
                {/* start mobile design  */}
                <div className="lg:hidden ">
                    <div className="flex justify-between  items-center w-full h-[60px]">
                        <h4 className="text-white text-sm font-medium mx-[20px]">Category</h4>
                        <AiFillCloseSquare onClick={()=>setShow(!show)} className="text-white cursor-pointer  text-lg mx-[20px]"/>
                    </div>
                    <div className="p-3">
                        <input className="w-full  outline-none border border-white rounded-md text-gray-900 py-2 px-3 bg-[#edf5f5]" type="text" placeholder="Category name ..."/>
                    </div>
                    <div className="p-3">
                        <label htmlFor="file" className="w-full h-[250px] flex flex-col items-center justify-center border border-dashed border-[#edf5f5]">
                            <IoImagesSharp className="text-white"/>
                            <h5 className="text-[14px] pt-1  text-white">Upload image</h5>
                        </label>
                        <input type='file' className="hidden" name="file" id="file"/>
                    </div>
                    <div className="p-3">
                        <button className="hover:shadow-green-300 hover:shadow-sm text-white bg-green-600 px-3 py-2 w-full rounded-md" type="submit">Add Category</button>
                    </div>
                </div>
                {/* end mobile design  */}
                {/* start lg design  */}
                <div className="hidden lg:block p-3">
                    <h4 className="text-gray-900 font-semibold px-3">Add Category</h4>
                    <div className="px-3 py-2 my-2 flex flex-col justify-start">
                        <label htmlFor="category" className="text-gray-800 text-sm pb-2 font-medium">Category name :</label>
                        <input className="px-3 py-2 rounded-md bg-[#edf5f5] text-gray-700 outline-none focus:border focus:border-green-400 border border-white" type="text" name="category" id="category"/>
                    </div>
                    <div className="p-3">
                        <label htmlFor="file" className="w-full h-[250px] flex flex-col items-center justify-center border-2 border-dashed border-green-500] mb-3">
                            <IoImagesSharp className="text-green-500"/>
                            <h5 className="text-[14px] pt-1  text-green-500">Upload image</h5>
                        </label>
                        <input type='file' className="hidden" name="file" id="file"/>
                    </div>
                    <div className="p-3">
                        <button className="hover:shadow-green-300 hover:shadow-sm text-white bg-green-600 px-3 py-2 w-full rounded-md" type="submit">Add Category</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;