import { configureStore } from '@reduxjs/toolkit'
import  temperatureSlice  from './redux/dataTemp'
import userData  from './redux/dataUser'


export const store = configureStore({
  reducer: {
    tempLight: temperatureSlice,
    user:userData
  },
})