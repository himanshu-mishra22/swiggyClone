import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"


//initialize the store using configurStore() method
const appStore = configureStore({

    //reducer are imported from the slice file
    reducer:{
        cart: cartReducer
    },
    
});





export default appStore