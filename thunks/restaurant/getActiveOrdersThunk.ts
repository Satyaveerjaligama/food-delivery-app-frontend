/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateActiveOrders } from '@/store/slices/restaurantDataSlice';
import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getActiveOrdersThunk = createAsyncThunk('getActiveOrdersThunk', async(_, thunkAPI: any) => {
  const getState: RootState = thunkAPI.getState();
  const restaurantId = getState.centralDataSlice.userDetails.userId;

  const requestConfig = {
    method: 'GET',
    url: `${process.env.API_BASE_URL}/${process.env.ACTIVE_ORDERS}/${restaurantId}`,
  };

  try{
    thunkAPI.dispatch(setLoader(true));
    const response = await axios(requestConfig);
    if(response.status === 200 && response?.data) {
      thunkAPI.dispatch(updateActiveOrders(response.data));
    }
  } catch(err: any) {
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: err.response?.data?.message ?? SNACKBAR_MESSAGES.failedTo('fetch in-coming orders'),
      status: SNACKBAR_STATUS.error
    }));
  } finally {
    thunkAPI.dispatch(setLoader(false));
  }
});

export default getActiveOrdersThunk;