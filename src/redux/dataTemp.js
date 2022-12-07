import { createSlice, current } from '@reduxjs/toolkit';
import DateNow from "./data/Date";

const initialState = {
    labels: DateNow.hours,
    datasets: [
      {
        label: 'دما',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 48,56,65,50,43]
      },
      {
        label: 'نور',
        backgroundColor: 'rgba(0,0,2,1)',
        borderColor: ' rgba(255,255,52,1)',
        borderWidth: 2,
        data: [26, 28, 20, 31, 37, 30,33,35,28,24]
      }
    ],
    jusTemp:{},
    justLight:{}
}

export const temperatureSlice = createSlice({
  name: 'Temperature',
  initialState,
  reducers: {
    getJustTemp : (state, action) => {
      // console.log(current(state.datasets))
      const Temp=current(state.datasets).find((item) => item.label==="دما");
      if(Temp){
        // console.log("temp is mojod :", Temp)
        state.jusTemp=Temp
      }
    },

    getJustLight : (state,action) => {
      const Light=current(state.datasets).find((item) => item.label==="نور");
      if(Light){
        state.justLight=Light
      }
    }
  },
})

export const {getJustTemp, getJustLight } = temperatureSlice.actions
export default temperatureSlice.reducer