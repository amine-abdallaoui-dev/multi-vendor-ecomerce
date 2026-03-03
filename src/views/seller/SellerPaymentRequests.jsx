import React from 'react';

import PaymentStatistic from "./components/PaymentStatistice.jsx";
import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import Paginition from "./components/Paginition.jsx";

const SellerPaymentRequests = () => {
    return (
        <div>
            <PaymentStatistic/>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 ">

                <div className="w-full ml-3 lg:ml-5 my-4 lg:my-6 bg-white overflow-hidden ">
                    <div className="w-full flex items-center gap-4 my-3">
                        <form className="w-full flex lg:ml-5 ml-1 gap-4 items-center">
                            <input className="w-[70%] focus:border-green-300 outline-none rounded-md px-4 py-2 border border-green-300 bg-[#edf5f5] text-slate-800" type="text" value="" placeholder="amount ..."/>
                            <button className="w-[20%] hover:bg-green-300 rounded px-3 py-2 bg-green-400 text-white" type="submit">Submit</button>
                        </form>
                    </div>
                    <table className="w-full  mx-5 my-4">
                            <tr className="border-b border-slate-800  mx-5 bg-[#edf5f5]">
                                <td className="py-3 px-5" scope="col">Id</td>
                                <td scope="col">Amount</td>
                                <td scope="col">Status</td>
                                <td scope="col">Date</td>
                            </tr>
                        {
                            [1,2,3,4,5,6,7,8].map((item) => {
                                return (
                                    <tr className="border-b border-slate-300  mx-5 hover:bg-[#edf5f5]">
                                        <td className="py-3 px-5" scope="col">10</td>
                                        <td scope="col">$120</td>
                                        <td scope="col">Pending</td>
                                        <td scope="col">{new Date(Date.now()).toDateString()}</td>
                                    </tr>
                                )
                            })
                        }


                    </table>
                        <Paginition/>
                </div>
                <div className="w-full ml-3 lg:ml-5 my-4 lg:my-6 bg-white overflow-hidden ">
                    <h3 className="text-gray-700 pt-8 px-5">Success Withdraw</h3>
                    <table className="w-full  mx-5 my-4">
                        <tr className="border-b border-slate-800  mx-5 bg-[#edf5f5]">
                            <td className="py-3 px-5" scope="col">Id</td>
                            <td scope="col">Amount</td>
                            <td scope="col">Status</td>
                            <td scope="col">Date</td>
                        </tr>
                        {
                            [1,2,3,4,5,6,7,8].map((item) => {
                                return (
                                    <tr className="border-b border-slate-300  mx-5 hover:bg-[#edf5f5]">
                                        <td className="py-3 px-5" scope="col">10</td>
                                        <td scope="col">$120</td>
                                        <td scope="col">Pending</td>
                                        <td scope="col">{new Date(Date.now()).toDateString()}</td>
                                    </tr>
                                )
                            })
                        }


                    </table>
                    <Paginition/>
                </div>
            </div>
        </div>
    );
};

export default SellerPaymentRequests;