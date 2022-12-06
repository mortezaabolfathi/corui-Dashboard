import { configureStore } from '@reduxjs/toolkit'
import  temperatureSlice  from './redux/dataTemp'


export const store = configureStore({
  reducer: {
    temperature: temperatureSlice
  },
})