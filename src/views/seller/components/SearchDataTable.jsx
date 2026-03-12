import React from 'react';

const SearchDataTable = ({ setParPage , searchValue, setSearchValue}) => {

    return (
        <div className="items-center flex  w-full h-[80px]">
            <form className=" hidden md:flex  justify-between w-full">
                <select onChange={(e)=> setParPage(e.target.value)} className=" md:px-3 py-2 bg-[#edf5f5] outline-none border-[#edf5f5] ">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                </select>
                <input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} className="md:w-[15%] md:px-3 md:py-2 bg-[#edf5f5] outline-none border-[#edf5f5]"  type="text" placeholder="Search ..."/>
            </form>
        </div>

    );
};

export default SearchDataTable;