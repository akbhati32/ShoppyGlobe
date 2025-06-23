// Redux store configuration using @reduxjs/toolkit.  
// Reducer for Cart  

import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice.js'

const shopStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default shopStore;