import React, {useState} from 'react';
import {useSelector} from "react-redux";
import { MdAddAPhoto } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import ModelPopUp from "./components/ModelPopUp.jsx";



const Profile = () => {
    const path = useSelector(state => state.info);

    const [imageShown, setImageShown] = useState([]);
    const handelProfileImage = (e)=>{
        const file = e.target.files;
        const length = file.length;
        if(length > 0){
            const image = [];
            for (let i = 0; i < length; i++){
                image.push({url:URL.createObjectURL(file[i]) });
            }
            setImageShown(image);
        }
    }

    const [show, setShow] = useState(false);
    console.log(show)

    return (
        <>
            {
                show ? <ModelPopUp show={show} setShow={setShow}/> : ""
            }


        <div className='mt-[100px] lg:mt-0 md:mt-0 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className="w-fill bg-white  overflow-hidden ">
                <div className="w-full flex justify-center">
                    <div className="w-[120px] h-[120px] flex flex-col justify-center items-center bg-[#edf5f5] rounded-full relative">
                        {
                            imageShown.map((image,index)=>{
                                return (
                                    <img className="w-full h-full p-2 rounded-full" src={image.url}/>
                                )
                            })
                        }
                        <label htmlFor="profile" className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-black cursor-pointer opacity-50 rounded absolute bottom-0 right-0">
                            <MdAddAPhoto className="text-white text-lg cursor-pointer"/>
                        </label>
                        <input onChange={handelProfileImage} type='file' className="hidden" id='profile'/>
                    </div>

                </div>
                <div className="relative">
                    <div className="my-4 w-full h-[200px] rounded-md bg-gray-900 text-white overflow-hidden relative">
                        <div className="px-5 py-3 w-full h-full flex flex-col justify-center ">
                            <h2 className="text-sm pb-2">Name : Amine abdallaoui</h2>
                            <h2 className="text-sm pb-2">Email : Amine@gmail.com</h2>
                            <h2 className="text-sm pb-2">Role : Seller</h2>
                            <h2 className="text-sm pb-2">status : Active</h2>
                            <h2 className="text-sm pb-2">Payment Account : <span className="ml-4 px-3 py-2 text-white bg-blue-600 rounded-md">click active</span></h2>
                        </div>

                    </div>
                    <divs onClick={()=>setShow(!show)} className="absolute top-1 right-1 cursor-pointer">
                        <span className=" flex justify-center items-center"><FaRegEdit className="w-[28px] h-full p-2 text-sm bg-green-600 rounded text-white"/></span>
                    </divs>
                </div>
                <div className="w-full mx-4 mb-5 overflow-hidden">
                    <form className="w-[95%] flex flex-col">
                        <div className="my-3 flex flex-col">
                            <label className="text-gray-800 text-sm font-medium mb-2">Shop Name :</label>
                            <input placeholder="Shop name ..." className="border border-green-200 outline-none rounded-md focus:bg-[#edf5f5] focus:border-green-600  px-4 py-3" type="text" id="shop-name"/>
                        </div>
                        <div className="my-3 flex flex-col">
                            <label className="text-gray-800 text-sm font-medium mb-2">Division Name :</label>
                            <input placeholder="Division ..." className="border border-green-200 outline-none rounded-md focus:bg-[#edf5f5] focus:border-green-600  px-4 py-3" type="text" id="shop-name"/>
                        </div>
                        <div className="my-3 flex flex-col">
                            <label className="text-gray-800 text-sm font-medium mb-2">District Name :</label>
                            <input placeholder="District ..." className="border border-green-200 outline-none rounded-md focus:bg-[#edf5f5] focus:border-green-600  px-4 py-3" type="text" id="shop-name"/>
                        </div>
                        <div className="my-3 flex flex-col">
                            <label className="text-gray-800 text-sm font-medium mb-2">Sub District Name :</label>
                            <input placeholder="Sub District ..." className="border border-green-200 outline-none rounded-md focus:bg-[#edf5f5] focus:border-green-600  px-4 py-3" type="text" id="shop-name"/>
                        </div>
                        <div className="w-full">
                            <button className="text-white bg-green-400 px-4 py-3 rounded-md mt-3 ml-1 hover:bg-green-300">
                                Update profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-full bg-white">
                <div className="">
                    <h2 className="text-gray-800 font-medium p-4">Change Password </h2>
                </div>
                <div className="w-full">
                    <form className="w-[95%] flex flex-col px-5 ">
                        <div className="my-3 flex flex-col">
                            <label className="text-gray-800 text-sm font-medium mb-2">Email Address :</label>
                            <input placeholder="Shop name ..." className="border border-green-200 outline-none rounded-md focus:bg-[#edf5f5] focus:border-green-600  px-4 py-3" type="text" id="shop-name"/>
                        </div>
                        <div className="my-3 flex flex-col">
                            <label className="text-gray-800 text-sm font-medium mb-2">Old Password :</label>
                            <input placeholder="Division ..." className="border border-green-200 outline-none rounded-md focus:bg-[#edf5f5] focus:border-green-600  px-4 py-3" type="password" id="shop-name"/>
                        </div>
                        <div className="my-3 flex flex-col">
                            <label className="text-gray-800 text-sm font-medium mb-2">New Password :</label>
                            <input placeholder="District ..." className="border border-green-200 outline-none rounded-md focus:bg-[#edf5f5] focus:border-green-600  px-4 py-3" type="password" id="shop-name"/>
                        </div>
                        <div className="w-full">
                            <button className="text-white bg-green-400 px-4 py-3 rounded-md mt-3 ml-1 hover:bg-green-300">
                                Update Password
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        </>
    );
};

export default Profile;