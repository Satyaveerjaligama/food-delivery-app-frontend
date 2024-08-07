/* eslint-disable @typescript-eslint/no-explicit-any */
import TextField from '@/components/TextField';
import { updateRestaurantDetails } from '@/store/slices/centralDataSlice';
import { RestaurantDetails } from '@/utilities/constants';
import { Box } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

interface RestaurantProps {
  restaurantDetails: RestaurantDetails;
  errors: any;
}

const Restaurant = (props: RestaurantProps) => {
  const dispatch = useDispatch();
  const { restaurantDetails, errors } = props;

  const onChangeHandler = (event: any, type: string) => {
    dispatch(
      updateRestaurantDetails({ ...restaurantDetails, [type]: event.target.value })
    );
  };

  return (
    <Box className="height-50vh scroll-bar overflow-y-auto py-2 pr-2">
      <TextField
        label="Restaurant name"
        size="small"
        fullWidth
        className="mb-4"
        value={restaurantDetails.restaurantName}
        onChange={(event) => onChangeHandler(event, 'restaurantName')}
        helperText={errors.restaurantName ?? ''}
        error={Boolean(errors.restaurantName)}
      />
      <TextField
        label="Restaurant type"
        size="small"
        fullWidth
        className="mb-4"
        value={restaurantDetails.restaurantType}
        onChange={(event) => onChangeHandler(event, 'restaurantType')}
        helperText={errors.restaurantType ?? ''}
        error={Boolean(errors.restaurantType)}
      />
      <TextField
        label="Address"
        fullWidth
        size="small"
        className="mb-4"
        value={restaurantDetails.address}
        onChange={(event) => onChangeHandler(event, 'address')}
        helperText={errors.address ?? ''}
        error={Boolean(errors.address)}
      />
      <TextField
        label="Pincode"
        fullWidth
        size="small"
        className="mb-4"
        value={restaurantDetails.pincode}
        onChange={(event) => onChangeHandler(event, 'pincode')}
        helperText={errors.pincode ?? ''}
        error={Boolean(errors.pincode)}
      />
      <TextField
        label="Email id"
        fullWidth
        size="small"
        className="mb-4"
        value={restaurantDetails.emailId}
        onChange={(event) => onChangeHandler(event, 'emailId')}
        helperText={errors.emailId ?? ''}
        error={Boolean(errors.emailId)}
      />
      <TextField
        label="Phone number"
        fullWidth
        size="small"
        className="mb-4"
        value={restaurantDetails.phoneNumber}
        onChange={(event) => onChangeHandler(event, 'phoneNumber')}
        helperText={errors.phoneNumber ?? ''}
        error={Boolean(errors.phoneNumber)}
      />
      <TextField
        label="GST number"
        fullWidth
        size="small"
        className="mb-4"
        value={restaurantDetails.gstNumber}
        onChange={(event) => onChangeHandler(event, 'gstNumber')}
        helperText={errors.gstNumber ?? ''}
        error={Boolean(errors.gstNumber)}
      />
      <TextField
        label="FSSAI license number"
        fullWidth
        size="small"
        className="mb-4"
        value={restaurantDetails.fssaiNumber}
        onChange={(event) => onChangeHandler(event, 'fssaiNumber')}
        helperText={errors.fssaiNumber ?? ''}
        error={Boolean(errors.fssaiNumber)}
      />
      <TextField
        type="password"
        label="Password"
        size="small"
        fullWidth
        className="mb-4"
        value={restaurantDetails.password}
        onChange={(event) => onChangeHandler(event, 'password')}
        helperText={errors.password ?? ''}
        error={Boolean(errors.password)}
      />
      <TextField
        type="password"
        label="Confirm Password"
        size="small"
        fullWidth
        className="mb-4"
        value={restaurantDetails.reEnteredPassword}
        onChange={(event) => onChangeHandler(event, 'reEnteredPassword')}
        helperText={errors.reEnteredPassword ?? ''}
        error={Boolean(errors.reEnteredPassword)}
      />
    </Box>
  );
};

export default Restaurant;
