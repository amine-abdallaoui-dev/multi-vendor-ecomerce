import React, {useState} from 'react';
import { BsFillSendCheckFill } from "react-icons/bs";
import {useSelector} from "react-redux";


const SellersChat = () => {
    const path = useSelector(state => state.info.imagesPath);
    const [isSelected,setIsSelected] = useState(false)
    return (
        <div className="flex px-3 gap-5 bg-white w-full h-[80vh] overflow-y-scroll">
            <div className="w-3/12 h-[79vh] pl-5 py-3 bg-[#edf5f5] rounded-[10px 0px 0px 0px 10px] overflow-auto [&::-webkit-scrollbar]:hidden
                  [-ms-overflow-style:none]
                  [scrollbar-width:none">

                {
                    [1,1,1,1,1,1,1,1,1,1,1,1,1].map((item, index) => {
                        return (
                                <div className="w-full flex items-center gap-4">
                                    <div className="w-[50px] h-[50px] my-3 relative">
                                        <img className="w-full h-full rounded-full" src={`${path}/seller.png`} alt="user image"/>
                                        <div className="bg-green-400 w-[8px] h-[8px] rounded-full absolute bottom-0 right-0"></div>
                                    </div>
                                    <div className="">
                                        <h4>Amine Abdallaoui</h4>
                                        <h6>Seller</h6>
                                    </div>
                                </div>

                        )
                    })
                }
            </div>
            <div className="w-9/12 flex flex-col justify-between">
                <div className="w-full flex items-center gap-4">
                    <div className="w-[50px] h-[50px] my-3 relative">
                        <img className="w-full h-full rounded-full" src={`${path}/seller.png`} alt="user image"/>
                        <div className="bg-green-400 w-[8px] h-[8px] rounded-full absolute bottom-0 right-0"></div>
                    </div>
                    <div className="">
                        <h4>Amine Abdallaoui</h4>
                        <h6>Seller</h6>
                    </div>
                </div>
                <div className=" h-[69vh] my-4 bg-gray-800 rounded-md flex justify-end flex-col overflow-y-auto  [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex-1 overflow-y-auto px-3
                  [&::-webkit-scrollbar]:hidden
                  [-ms-overflow-style:none]
                  [scrollbar-width:none]">
                       <div className="flex flex-col overflow-y-auto">
                           <div className="w-full ">
                               <div id="reciver" className=' min-h-[60px] min-w-[200px] flex items-center gap-2  float-right'>
                                   <div className="w-auto h-auto min-h-[50px] min-w-[200px] bg-gray-700 rounded-md flex items-center">
                                       <p className="text-sm text-white px-2">last msg from a devloper</p>
                                   </div>
                                   <div className="w-[50px] h-[50px] my-3">
                                       <img className="w-full h-full rounded-full" src={`${path}/seller.png`} alt="user image"/>
                                   </div>
                               </div>
                           </div>
                           <div className="w-full ">
                               <div id="sender" className="min-h-[60px] min-w-[200px] flex items-center gap-2 ">
                                   <div className="w-[50px] h-[50px] my-3">
                                       <img className="w-full h-full rounded-full" src={`${path}/seller.png`} alt="user image"/>
                                   </div>
                                   <div className="w-auto h-auto min-h-[50px] min-w-[200px] bg-gray-700 rounded-md flex items-center">
                                       <p className="text-sm text-white px-2">last msg from a devloper</p>
                                   </div>

                               </div>
                           </div>
                           <div className="w-full ">
                               <div id="reciver" className=' min-h-[60px] min-w-[200px] flex items-center gap-2  float-right'>
                                   <div className="w-auto h-auto min-h-[50px] min-w-[200px] bg-gray-700 rounded-md flex items-center">
                                       <p className="text-sm text-white px-2">last msg from a devloper</p>
                                   </div>
                                   <div className="w-[50px] h-[50px] my-3">
                                       <img className="w-full h-full rounded-full" src={`${path}/seller.png`} alt="user image"/>
                                   </div>
                               </div>
                           </div>
                           <div className="w-full ">
                               <div id="sender" className="min-h-[60px] min-w-[200px] flex items-center gap-2 ">
                                   <div className="w-[50px] h-[50px] my-3">
                                       <img className="w-full h-full rounded-full" src={`${path}/seller.png`} alt="user image"/>
                                   </div>
                                   <div className="w-auto h-auto min-h-[50px] min-w-[200px] bg-gray-700 rounded-md flex items-center">
                                       <p className="text-sm text-white px-2">last msg from a devloper</p>
                                   </div>

                               </div>
                           </div>
                           <div className="w-full ">
                               <div id="reciver" className=' min-h-[60px] min-w-[200px] flex items-center gap-2  float-right'>
                                   <div className="w-auto h-auto min-h-[50px] min-w-[200px] bg-gray-700 rounded-md flex items-center">
                                       <p className="text-sm text-white px-2">last msg from a devloper</p>
                                   </div>
                                   <div className="w-[50px] h-[50px] my-3">
                                       <img className="w-full h-full rounded-full" src={`${path}/seller.png`} alt="user image"/>
                                   </div>
                               </div>
                           </div>
                           <div className="w-full ">
                               <div id="sender" className="min-h-[60px] min-w-[200px] flex items-center gap-2 ">
                                   <div className="w-[50px] h-[50px] my-3">
                                       <img className="w-full h-full rounded-full" src={`${path}/seller.png`} alt="user image"/>
                                   </div>
                                   <div className="w-auto h-auto min-h-[50px] min-w-[200px] bg-gray-700 rounded-md flex items-center">
                                       <p className="text-sm text-white px-2">last msg from a devloper</p>
                                   </div>

                               </div>
                           </div>
                           <div className="w-full ">
                               <div id="reciver" className=' min-h-[60px] min-w-[200px] flex items-center gap-2  float-right'>
                                   <div className="w-auto h-auto min-h-[50px] min-w-[200px] bg-gray-700 rounded-md flex items-center">
                                       <p className="text-sm text-white px-2">last msg from a devloper</p>
                                   </div>
                                   <div className="w-[50px] h-[50px] my-3">
                                       <img className="w-full h-full rounded-full" src={`${path}/seller.png`} alt="user image"/>
                                   </div>
                               </div>
                           </div>
                           <div className="w-full ">
                               <div id="sender" className="min-h-[60px] min-w-[200px] flex items-center gap-2 ">
                                   <div className="w-[50px] h-[50px] my-3">
                                       <img className="w-full h-full rounded-full" src={`${path}/seller.png`} alt="user image"/>
                                   </div>
                                   <div className="w-auto h-auto min-h-[50px] min-w-[200px] bg-gray-700 rounded-md flex items-center">
                                       <p className="text-sm text-white px-2">last msg from a devloper</p>
                                   </div>

                               </div>
                           </div>
                           <div className="w-full ">
                               <div id="reciver" className=' min-h-[60px] min-w-[200px] flex items-center gap-2  float-right'>
                                   <div className="w-auto h-auto min-h-[50px] min-w-[200px] bg-gray-700 rounded-md flex items-center">
                                       <p className="text-sm text-white px-2">last msg from a devloper</p>
                                   </div>
                                   <div className="w-[50px] h-[50px] my-3">
                                       <img className="w-full h-full rounded-full" src={`${path}/seller.png`} alt="user image"/>
                                   </div>
                               </div>
                           </div>
                           <div className="w-full ">
                               <div id="sender" className="min-h-[60px] min-w-[200px] flex items-center gap-2 ">
                                   <div className="w-[50px] h-[50px] my-3">
                                       <img className="w-full h-full rounded-full" src={`${path}/seller.png`} alt="user image"/>
                                   </div>
                                   <div className="w-auto h-auto min-h-[50px] min-w-[200px] bg-gray-700 rounded-md flex items-center">
                                       <p className="text-sm text-white px-2">last msg from a devloper</p>
                                   </div>

                               </div>
                           </div>
                           <div className="w-full ">
                               <div id="sender" className="min-h-[60px] min-w-[200px] flex items-center gap-2 ">
                                   <div className="w-[50px] h-[50px] my-3">
                                       <img className="w-full h-full rounded-full" src={`${path}/seller.png`} alt="user image"/>
                                   </div>
                                   <div className="w-auto h-auto min-h-[50px] min-w-[200px] bg-gray-700 rounded-md flex items-center">
                                       <p className="text-sm text-white px-2">last msg from a devloper</p>
                                   </div>

                               </div>
                           </div>
                           <div className="w-full ">
                               <div id="reciver" className=' min-h-[60px] min-w-[200px] flex items-center gap-2  float-right'>
                                   <div className="w-auto h-auto min-h-[50px] min-w-[200px] bg-gray-700 rounded-md flex items-center">
                                       <p className="text-sm text-white px-2">last msg from a devloper</p>
                                   </div>
                                   <div className="w-[50px] h-[50px] my-3">
                                       <img className="w-full h-full rounded-full" src={`${path}/seller.png`} alt="user image"/>
                                   </div>
                               </div>
                           </div>

                       </div>
                    </div>
                </div>

                <div className="w-full py-3 flex ">
                    <input className="w-10/12 bg-[#edf5f5] rounded-md border-2 border-[#edf5f5] outline-none px-2 py-5" type="text"/>
                    <button className="flex justify-center items-center gap-3 mr-4 w-2/12 py-3 px-4 bg-blue-600 text-white font-medium rounded rounded-[0px 15px 15px 0px]">
                        <span><BsFillSendCheckFill /></span>
                        <span>Send</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SellersChat;