import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
const Paginition = () => {
    return (
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

    );
};

export default Paginition;