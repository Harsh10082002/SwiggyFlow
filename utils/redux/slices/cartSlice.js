

import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:"cart slice",
    initialState : {
        cartArray : [{}]
    },
    reducers: {
        action1: (state, action)=>{
            const {name, price} = action.payload;
            state.cartArray.push({name,price})
        },
        action2: (state, action)=>{
            // console.log(state.cartArray.length);
        }
    }
});

/* createSlice is returning an object which we stored in cartSlice.
    now cartSlice is an object in which actions and reducer are created
    as keys in which actions are having all the actions like action1, action2, and so on.
    and reducer is storing all the reducer funtion like reducer funtion (annonymous) of action1 and action2
*/
export const {action1} = cartSlice.actions;
export default cartSlice.reducer;