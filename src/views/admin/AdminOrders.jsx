import React, {useState} from 'react';
import { FaArrowDownShortWide } from "react-icons/fa6";
import {Link} from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


const AdminOrders = () => {
    return (
        <div className="w-full md:ml-5 bg-white rounded-md md:overflow-hidden overflow-auto h-auto">
            <div className="items-center flex md:px-[25px] w-full h-[80px]">
                <form className=" hidden md:flex  justify-between w-full">
                    <select className=" md:px-3 py-2 bg-[#edf5f5] outline-none border-[#edf5f5] ">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                    </select>
                    <input className="md:w-[15%] md:px-3 md:py-2 bg-[#edf5f5] outline-none border-[#edf5f5]"  type="text" placeholder="Search ..."/>
                </form>
            </div>
            <div className="w-full bg-[#edf5f5] flex md:ml-5 px-2 mt-[30px] h-auto md:overflow-hidden overflow-auto mb-[20px]">
                <div className="flex justify-start items-start flex-col w-full ">
                    <div className=" w-full -700 border-2 py-2 border-b-[#ccd5ae] text-start">
                        <div className="flex  justify-between py-2  items-center w-full px-2">
                            <h6 className="flex justify-start font-[400] w-[160px]">Order Id</h6>
                            <h6 className=" font-[400] w-[16%]">Price</h6>
                            <h6 className=" flex justify-start font-[400] w-[16%]">Payment Status</h6>
                            <h6 className="flex justify-start  font-[400] w-[16%]">Status</h6>
                            <h6 className="flex justify-start  font-[400] w-[16%]">Action</h6>
                            <h6 className="flex justify-start   font-[400] w-[16%]"><FaArrowDownShortWide /></h6>
                        </div>
                    </div>
                    <div className=" w-full  flex justify-start py-2 border-2 border-b-[#ccd5ae]">
                        <div className="flex justify-between  items-center w-full py-2 px-2   ">
                            <h6 className="flex justify-start  font-[400] w-[13%]">#7Y7Y7H</h6>
                            <h6 className="flex justify-start  font-[400] w-[16%]">$170</h6>
                            <h6 className="flex justify-start  font-[400] w-[16%]">Pending</h6>
                            <h6 className="flex justify-start  font-[400] w-[16%]">Pending</h6>
                            <h6 className="flex justify-start  font-[400] w-[16%]"><Link to="">View All</Link></h6>
                            <h6 className="flex justify-start  font-[400] w-[16%]"><FaArrowDownShortWide /></h6>
                        </div>
                    </div>
                    {
                        [1,2,3,4,5].map((item,index) => {
                            return (
                                <div className=" w-full  flex justify-start py-2 border-2 border-b-[#ccd5ae]">
                                    <div className="flex justify-between  items-center w-full py-2 px-2   ">
                                        <h6 className="flex justify-start  font-[400] w-[13%]">#7Y7Y7H</h6>
                                        <h6 className="flex justify-start  font-[400] w-[16%]">$170</h6>
                                        <h6 className="flex justify-start  font-[400] w-[16%]">Pending</h6>
                                        <h6 className="flex justify-start  font-[400] w-[16%]">Pending</h6>
                                        <h6 className="flex justify-start  font-[400] w-[16%]"><Link to="">View All</Link></h6>
                                        <h6 className="flex justify-start  font-[400] w-[16%]"><FaArrowDownShortWide /></h6>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className="w-full flex justify-start ml-6 gap-1 items-center mb-3">
                <span className="py-3 px-3 rounded-md bg-[#069f96] text-white font-medium">
                    <FaArrowLeftLong/>
                </span>
                <span className="py-1 px-3 rounded-md bg-[#069f96] text-white font-medium">1</span>
                {
                    [1,2,3,4,5].map((item,index) => {
                        return (
                            <span className="py-1 px-3 rounded-md bg-gray-400 text-white font-medium">{item}</span>
                        )
                    })
                }
                <span className="py-3 px-3 rounded-md bg-[#069f96] text-white font-medium">
                    <FaArrowRightLong/>
                </span>

            </div>
        </div>
    );
};

export default AdminOrders;