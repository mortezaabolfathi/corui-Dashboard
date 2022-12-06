import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    labels: ['January', 'February', 'March',
             'April', 'May','akbar'],
    datasets: [
      {
        label: 'دما',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 48]
      },
      {
        label: 'نور',
        backgroundColor: 'rgba(0,0,2,1)',
        borderColor: ' rgba(255,255,52,1)',
        borderWidth: 2,
        data: [5, 59, 87, 84, 56, 8]
      }
    ]
}

export const temperatureSlice = createSlice({
  name: 'Temperature',
  initialState,
  reducers: {
  
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default temperatureSlice.reducer