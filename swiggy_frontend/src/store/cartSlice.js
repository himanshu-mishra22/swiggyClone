import { createSlice } from "@reduxjs/toolkit";

//slices are the particular function of a component
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //action ke correspoding reducer function==> action(state,function):reducerFunction
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;