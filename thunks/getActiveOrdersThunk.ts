/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateActiveOrders } from '@/store/slices/restaurantDataSlice';
import { RootState } from '@/store/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getActiveOrdersThunk = createAsyncThunk('getActiveOrdersThunk', async(_, thunkAPI: any) => {
  const getState: RootState = thunkAPI.getState();
  const restaurantId = getState.centralDataSlice.userDetails.userId;

  const requestConfig = {
    method: 'GET',
    url: `http://localhost:5000/restaurant/active-orders/${restaurantId}`,
  };

  try{
    const response = await axios(requestConfig);
    if(response.status === 200 && response?.data) {
      thunkAPI.dispatch(updateActiveOrders(response.data));
    }
  } catch(err) {
    console.log(err);
  }
});

export default getActiveOrdersThunk;