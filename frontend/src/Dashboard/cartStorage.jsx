import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../Dashboard/cartSlice';
import adminItemsReducer from '../Dashboard/adminitemSlice';


 const store =configureStore({
    reducer:{
        cart:cartReducer,
        adminItems: adminItemsReducer,
    }
})

export default store