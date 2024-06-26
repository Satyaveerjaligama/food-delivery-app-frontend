/* eslint-disable @typescript-eslint/no-explicit-any */
import TextField from '@/components/TextField';
import { updateDeliveryAgentDetails } from '@/store/slices/centralDataSlice';
import { DeliveryAgentDetails } from '@/utilities/constants';
import { Box } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

interface DeliveryAgentProps {
  deliveryAgentDetails: DeliveryAgentDetails;
}

const DeliveryAgent = (props: DeliveryAgentProps) => {
  const dispatch = useDispatch();
  const { deliveryAgentDetails } = props;

  const onChangeHandler = (event: any, type: string) => {
    dispatch(
      updateDeliveryAgentDetails({
        ...deliveryAgentDetails,
        [type]: event?.target.value,
      })
    );
  };

  return (
    <Box className="height-50vh scroll-bar overflow-y-auto py-2">
      <TextField
        label="Full name"
        size="small"
        fullWidth
        className="mb-4"
        value={deliveryAgentDetails.fullName}
        onChange={(event) => onChangeHandler(event, 'fullName')}
      />
      <TextField
        label="Email Id"
        fullWidth
        size="small"
        className="mb-4"
        value={deliveryAgentDetails.emailId}
        onChange={(event) => onChangeHandler(event, 'emailId')}
      />
      <TextField
        label="Phone number"
        fullWidth
        size="small"
        className="mb-4"
        value={deliveryAgentDetails.phoneNumber}
        onChange={(event) => onChangeHandler(event, 'phoneNumber')}
      />
      <TextField
        label="Aadhaar number"
        fullWidth
        size="small"
        className="mb-4"
        value={deliveryAgentDetails.aadhaarNumber}
        onChange={(event) => onChangeHandler(event, 'aadhaarNumber')}
      />
      <TextField
        label="Vehicle model"
        fullWidth
        size="small"
        className="mb-4"
        value={deliveryAgentDetails.vehicleModel}
        onChange={(event) => onChangeHandler(event, 'vehicleModel')}
      />
      <TextField
        label="Vehicle number"
        fullWidth
        size="small"
        className="mb-4"
        value={deliveryAgentDetails.vehicleNumber}
        onChange={(event) => onChangeHandler(event, 'vehicleNumber')}
      />
      <TextField
        label="Address"
        fullWidth
        size="small"
        className="mb-4"
        value={deliveryAgentDetails.address}
        onChange={(event) => onChangeHandler(event, 'address')}
      />
      <TextField
        label="Pincode of delivery location"
        fullWidth
        size="small"
        className="mb-4"
        value={deliveryAgentDetails.availabilityPincode}
        onChange={(event) => onChangeHandler(event, 'availabilityPincode')}
      />
      <TextField
        type="password"
        label="Password"
        size="small"
        fullWidth
        className="mb-4"
        value={deliveryAgentDetails.password}
        onChange={(event) => onChangeHandler(event, 'password')}
      />
      <TextField
        type="password"
        label="Re-enter Password"
        size="small"
        fullWidth
        className="mb-4"
        value={deliveryAgentDetails.reEnteredPassword}
        onChange={(event) => onChangeHandler(event, 'reEnteredPassword')}
      />
    </Box>
  );
};

export default DeliveryAgent;
