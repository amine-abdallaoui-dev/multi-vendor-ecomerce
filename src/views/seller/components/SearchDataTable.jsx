import React from 'react';

const SearchDataTable = ({setPerPage,seachValue,setSeachValue}) => {
    return (
        <div className="items-center flex  w-full h-[80px]">
            <form className=" hidden md:flex  justify-between w-full">
                <select onChange={(e)=> setPerPage(e.target.value)} className=" md:px-3 py-2 bg-[#edf5f5] outline-none border-[#edf5f5] ">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                </select>
                <input value={seachValue} onChange={(e)=>setSeachValue(e.target.value)} className="md:w-[15%] md:px-3 md:py-2 bg-[#edf5f5] outline-none border-[#edf5f5]"  type="text" placeholder="Search ..."/>
            </form>
        </div>

    );
};

export default SearchDataTable;