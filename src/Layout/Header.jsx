import {useSelector} from "react-redux";
import { FaBarsStaggered } from "react-icons/fa6";


const Header = ({setIsVisibel,isVisibel}) => {
    const imagesPath = useSelector(state=>state.info.imagesPath);
    return (
        <>
            <div onClick={()=>setIsVisibel(!isVisibel)} className={`w-full h-screen bg-gray-800 ${isVisibel ? "visible" : "hidden"}  md:invisible opacity-50 absolute top-0 left-0 z-[1]`}>

            </div>
            <div onClick={()=>setIsVisibel(!isVisibel)} className=" flex justify-end items-center ml-3 md:pl-6  border  rounded-md">
                <FaBarsStaggered className="bg-[#edf5f5]  p-2 md:hidden absolute left-4 -z-9 cursor-pointer w-[38px] h-[35px]" />
            </div>
            <div className="md:w-[65%]">
                <form>
                    <input className="hidden md:block  mx-6 w-[40%] px-5 py-3 border border-[#edf5f5] bg-[#edf5f5] outline-none rounded-md" type="text" placeholder="Search ... " name="search" value=""/>
                </form>
            </div>
            <div className="flex  absolute right-0 md:right-[10%] items-center pl-0 md:p-[10px] md:pr-[80px]">
                <div className="flex justify-center items-center gep-1 md:gap-1 flex-col">
                    <h2 className="text-sm md-text-lg font-bold text-gray-900">Amine Abdallaoui</h2>
                    <span className="font-medium text-gray-900">Admin</span>
                </div>
                <div className="flex items-center justify-end ">
                    <img className="w-[120px] pr-5" src={`${imagesPath}/admin.png`} alt="admin_image"/>
                </div>
            </div>
        </>
    );
};

export default Header;