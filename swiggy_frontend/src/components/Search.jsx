import React from 'react'

const Search = ({setRestaurants,restArr}) => {
    const handleSearch=(searchText)=>{
        const searchArr = restArr.filter((restDetails)=>restDetails.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setRestaurants(searchArr);
    }


  return (
     <input  className="border rounded-2xl p-2 mx-4 cursor-pointer " type="text" placeholder="Search Restaurants" onChange={(e)=>handleSearch(e.target.value)}/>
  )
}

export default Search