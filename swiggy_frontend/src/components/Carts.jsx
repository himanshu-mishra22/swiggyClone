import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../store/cartSlice'

const Carts = () => {
   const cartItems =  useSelector((store)=>store.cart.items)
   console.log(cartItems);
   

   const dispatch = useDispatch()


   const handleClear = ()=>{
        dispatch(clearCart());
   }

   if(cartItems.length === 0) return (<h1>Empty Cart</h1>)
  return (
    <div>
        {cartItems.map((restInfo)=>(
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
              <button className='cursor-pointer bg-' onClick={(foodItem)=>handleClear(foodItem)}>Clear item</button>
              </div>

          </div> 
        ))}
    </div>
    
  )
}

export default Carts