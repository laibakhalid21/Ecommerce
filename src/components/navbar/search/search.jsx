import React from "react";

function SearchBox({ searchQuery, setSearchQuery, category, setCategory }){
    return(
        <>
        <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 rounded-md px-3 text-black focus:outline-blue-500"
            />
        
        </>
    )
}
export default SearchBox;