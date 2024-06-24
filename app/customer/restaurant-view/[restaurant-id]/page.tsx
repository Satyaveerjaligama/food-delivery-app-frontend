'use client';
import Layout from '@/components/Layout';
import MenuItems from '@/components/pages/restaurant-view/MenuItems';
import { AppDispatch, RootState } from '@/store/store';
import { fetchRestaurantDetails } from '@/thunks/fetchRestaurantDetailsThunk';
import { Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RestaurantPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const restaurantDetails = useSelector((state: RootState) => state.customerSlice.restaurantDetails);

  useEffect(() => {
    async function hitApi() {
      const url = new URL(window.location.href);
      const splitPathname = url.pathname.split('/');
      console.log(splitPathname);
      if(splitPathname.length === 4) {
        const restaurantId = splitPathname[splitPathname.length - 1];
        dispatch(fetchRestaurantDetails(restaurantId));
      }
    }
    hitApi();
  }, []);

  return (
    <Layout>
      <Typography className='text-center' variant='h4'>{restaurantDetails.restaurantName}</Typography>
      <Typography className="text-gray-400 text-base text-center">{restaurantDetails.restaurantType}</Typography>
      <Divider className='my-3'/>
      <MenuItems />
    </Layout>
  );
};


export default RestaurantPage;