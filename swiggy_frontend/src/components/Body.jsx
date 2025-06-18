import { useEffect, useState } from "react";
import ApiCalling from "./ApiCalling"
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import Clock from "./Clock";

function Body() {
  
  const restArr = ApiCalling();
  // const [restaurants, setRestaurants] = useState(restArr);   will result in empty arr bcz of async call; solution use useEffect to catch after render
  const [restaurants, setRestaurants] = useState([]);
  const [isActive1, setIsActive1]= useState(false);
  // const [isActive2, setIsActive2]= useState(false);

  useEffect(()=>{
    if(restArr && restArr.length) setRestaurants(restArr);
  }
  ,[restArr]);

  // console.log(restaurants);
  

  const handleRatings=()=>{
      const filteredRestaurants = restaurants.filter((restaurant) => {
        return restaurant.info.avgRating >= 4.5;
      });
      setRestaurants(filteredRestaurants);
      setIsActive1(true);
      // setIsActive2(false);
  }

  const handleReset = (restArr) => {
    setRestaurants(restArr)
    setIsActive1(false);
    // setIsActive2(true);
  }

  return (
   <>
    <Clock/>
    <div className="ml-20 mt-4">
       <header className="text-4xl font-bold font-serif items-center mb-5">Restaurants with online food delivery in Mathura</header>
       <button className={isActive1 ? " bg-amber-700 border rounded-2xl p-2 mx-4 cursor-pointer" : "border rounded-2xl p-2 mx-4 cursor-pointer "} onClick={handleRatings}>Ratings 4.5+</button>
       <button className={"border rounded-2xl p-2 mx-4 cursor-pointer active:bg-amber-600"} onClick={()=>handleReset(restArr)}>Reset</button>
       <Search setRestaurants={setRestaurants} restArr={restArr}/>
    
        <div className="mx-auto">
            <RestaurantCard restArr={restaurants} />
        </div>
    </div>
   </>
  )
}

export default Body