import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../Dashboard/cartSlice';

 const store =configureStore({
    reducer:{
        cart:cartReducer,
    }
})

export default store