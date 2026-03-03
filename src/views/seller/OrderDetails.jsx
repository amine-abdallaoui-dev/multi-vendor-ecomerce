import React from 'react';

const OrderDetails = () => {


    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-white rounded-md'>
                <div className='flex justify-between items-center p-4'>
                    <h2 className='text-xl text-gray-800'>Order Details</h2>
                    <select onChange="" value="" name="" id=""
                            className='px-4 py-2 focus:border-green-300 outline-none bg-[#edf5f5] border border-slate-700 rounded-md text-gray-800]'>
                        <option value="pending">pending</option>
                        <option value="processing">processing</option>
                        <option value="warehouse">warehouse</option>
                        <option value="placed">placed</option>
                        <option value="cancelled">cancelled</option>
                    </select>
                </div>

                <div className='p-4'>
                    <div className='flex gap-2 text-lg text-gray-800'>
                        <h2>#46556</h2>
                        <span>{new Date(Date.now()).toDateString()}</span>
                    </div>

                    <div className='flex flex-wrap'>
                        <div className='w-[30%]'>
                            <div className='pr-3 text-gray-800 text-lg'>
                                <div className='flex flex-col gap-1'>
                                    <h2 className='pb-2 font-semibold'>Deliver To : res attadmoun 1 imm 14 </h2>

                                </div>
                                <div className='flex justify-start items-center gap-3'>
                                    <h2>Payment Status: </h2>
                                    <span className='text-base'>Pending</span>
                                </div>
                                <span>Price : $123</span>

                                <div className='mt-4 flex flex-col gap-4 bg-[#edf5f5] rounded-md'>
                                    <div className='text-gray-800'>
                                        <div className='flex gap-3 text-md'>
                                            <img className='w-[50px] h-[50px]' src="" alt=""/>

                                            <div>
                                                <h2>product name</h2>
                                                <p>
                                                    <span>Brand : </span>
                                                    <span>Nike</span>
                                                    <span className='text-lg'>Quantity : 12 </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;