import React from 'react';
import Statistic from "./components/Statistic.jsx";
import Chart from 'react-apexcharts'
import LatestChatBox from "./components/LatestChatBox.jsx";
import {Link} from "react-router-dom";
const AdminDashboard = () => {
    const state = {
        series : [
            {
                name : "Orders",
                data : [23,34,45,56,76,34,23,76,87,78,34,45]
            },
            {
                name : "Revenue",
                data : [67,39,45,56,90,56,23,56,87,78,67,78]
            },
            {
                name : "Sellers",
                data : [34,39,56,56,80,67,23,56,98,78,45,56]
            },
        ],
        options : {
            color : ['#181ee8','#181ee8'],
            plotOptions: {
                radius : 30
            },
            chart : {
                background : 'transparent',
                foreColor : '#d0d2d6'
            },
            dataLabels : {
                enabled : false
            },
            strock : {
                show : true,
                curve : ['smooth','straight','stepline'],
                lineCap : 'butt',
                colors : '#f0f0f0',
                width  : .5,
                dashArray : 0
            },
            xaxis : {
                categories : ['Jan','Feb','Mar','Apl','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            },
            legend : {
                position : 'top'
            },
            responsive : [
                {
                    breakpoint : 565,
                    yaxis : {
                        categories : ['Jan','Feb','Mar','Apl','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
                    },
                    options : {
                        plotOptions: {
                            bar : {
                                horizontal : true
                            }
                        },
                        chart : {
                            height : "550px"
                        }
                    }
                }
            ]
        }
    }

    return (
        <>
            <div className="w-full flex-wrap flex justify-center mt-[120px] md:mt-[10px]  items-center gap-2">
                <Statistic/>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
                <div className='rounded-2xl w-full md:w-[50%] h-[490px] mb-[50px] bg-white rounded-lg py-[30px] mt-[50px]'>
                    <Chart options={state.options} series={state.series} type='bar' height={350} />
                </div>
                <div className="w-full md:w-[50%] h-[490px] bg-white rounded-lg py-[30px] mt-[50px]">
                    <div className="flex justify-between ">
                        <h4 className="text-gray-900 font-[400] px-5">Latest Chat </h4>
                        <Link className="text-gray-900 px-5" to="">View All</Link>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        {
                            [1,2,3,4].map( item => {
                                return <LatestChatBox/>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="w-full bg-white py-5 h-[500px]">
                <div className="flex justify-between w-full px-8">
                    <h4 className="text-gray-900 font-medium">Recent Orders</h4>
                    <Link to=""><h5 className="text-gray-900 font-medium">View All</h5></Link>
                </div>
                <div className="w-full pt-8  h-[600px] mr-5  ">
                    <table className="w-full overflow-scroll md:overflow-x-hidden">
                        <thead className=" px-8 border-b border-[#072b2b] pb-4">
                            <th className="w-full flex justify-between pb-3">
                                <td className="w-[25%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">Order Id</h2></td>
                                <td className="w-[25%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">Price</h2></td>
                                <td className="w-[15%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">Payment Status</h2></td>
                                <td className="w-[15%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">Order Status</h2></td>
                                <td className="w-[10%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">Active</h2></td>
                            </th>
                        </thead>
                        <tbody className="text-center px-8 border-b border-[#072b2b] pb-4">
                        <tr className="w-full flex justify-between pb-3 pt-3 border-b border-[#072b2b] ">
                            <td className="w-[25%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">#Y8U9U9U</h2></td>
                            <td className="w-[25%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">$300</h2></td>
                            <td className="w-[15%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">Pending</h2></td>
                            <td className="w-[15%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">Pending</h2></td>
                            <td className="w-[10%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">Pending</h2></td>
                        </tr>
                        <tr className="w-full flex justify-between pb-3 pt-3 border-b border-[#072b2b] ">
                            <td className="w-[25%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">#576566</h2></td>
                            <td className="w-[25%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">$140</h2></td>
                            <td className="w-[15%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">Pending</h2></td>
                            <td className="w-[15%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">Pending</h2></td>
                            <td className="w-[10%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">Pending</h2></td>
                        </tr>
                        <tr className="w-full flex justify-between pb-3 pt-3 border-b border-[#072b2b] ">
                            <td className="w-[25%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">#87U8UU98UUU9</h2></td>
                            <td className="w-[25%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">$267</h2></td>
                            <td className="w-[15%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">completed</h2></td>
                            <td className="w-[15%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">completed</h2></td>
                            <td className="w-[10%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">pending</h2></td>
                        </tr>
                        <tr className="w-full flex justify-between pb-3 pt-3 border-b border-[#072b2b] ">
                            <td className="w-[25%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">#8U89U98U9U</h2></td>
                            <td className="w-[25%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">$70</h2></td>
                            <td className="w-[15%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">Pending</h2></td>
                            <td className="w-[15%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">Pending</h2></td>
                            <td className="w-[10%] text-start pl-8"><h2 className="text-[#072b2b] font-medium">Pending</h2></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;