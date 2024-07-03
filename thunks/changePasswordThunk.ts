/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateChangePasswordDetails } from '@/store/slices/centralDataSlice';
import { openSnackbar } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { initialState as centralDataInitialState } from '@/store/slices/centralDataSlice';

const changePassword = createAsyncThunk('changePassword', async(router: AppRouterInstance,thunkAPI: any) => {
  const getState: RootState = thunkAPI.getState();
  const userId = getState.centralDataSlice.userDetails.userId;
  const {oldPassword, newPassword} = getState.centralDataSlice.changePasswordDetails;
  const userType = getState.centralDataSlice.userType;

  const requestConfig = {
    method: 'PATCH',
    url: `${process.env.API_BASE_URL}/${process.env.CHANGE_PASSWORD}`,
    data: {
      userId,
      oldPassword,
      newPassword,
      type: userType
    }
  };

  try {
    const response = await axios(requestConfig);
    if(response.status === 200) {
      thunkAPI.dispatch(openSnackbar({
        open: true,
        message: SNACKBAR_MESSAGES.passwordChangeSuccess,
        status: SNACKBAR_STATUS.success
      }));
      router.push('/my-account');
      thunkAPI.dispatch(updateChangePasswordDetails(centralDataInitialState.changePasswordDetails));
    }
  } catch(err: any) {
    console.log(err);
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: err.response?.data?.message ?? SNACKBAR_MESSAGES.passwordChangeFailed,
      status: SNACKBAR_STATUS.error
    }));
  }
});

export default changePassword;