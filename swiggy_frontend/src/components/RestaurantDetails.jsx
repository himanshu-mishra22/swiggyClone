import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { addItem } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantDetails = () => {
    let {id} = useParams();
    const [restDetails,setresDetails] = useState([]);
    let API = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.49870&lng=77.66690&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;

    useEffect(()=>{
        async function APICalling(){
            let data = await axios.get(API);
            console.log(data.data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
            setresDetails(data.data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
        }
        APICalling();
        
        
    },[id]);

      const dispatch = useDispatch();
      function handleAddItem(foodItem){
        dispatch(addItem(foodItem))
      }

  return (
    <div>
        {restDetails.map((restInfo)=>(
             <div
            key={restInfo.card.info.id}
            className="bg-white border m-4 w-2xl border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 p-4"
          >
            <h2 className="text-lg font-bold mt-3 truncate">{restInfo.card.info.name}</h2>
            <p>{restInfo.card.info.description}</p>

            <div className="flex flex-wrap text-sm text-gray-600 mt-2 space-x-3">
              <span className="bg-yellow-100 text-green-800 px-2 py-0.5 rounded-full font-semibold">
                 Rs.{restInfo.card.info.defaultPrice/100}
              </span>
              <button className='cursor-pointer bg-' onClick={(foodItem)=>handleAddItem(foodItem)}>Add item</button>
              </div>

          </div> 
        ))}
    </div>
  )
}

export default RestaurantDetails