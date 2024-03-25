import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getCarts = createAsyncThunk('carts/getCarts', async () => {
  const response = await axios.get('http://localhost:3001/carts');
  return response.data;
});

export const addToCart = createAsyncThunk('carts/addToCart', async data => {
  await axios.post('http://localhost:3001/carts', data);
  return data;
});

export const deleteCart = createAsyncThunk('carts/deleteCart', async id => {
  try {
    await axios.delete(`http://localhost:3001/carts/${id}`);
    return id;
  } catch (error) {
    console.error('Hata oluştu:', error);
  }
});

export const clearCart = createAsyncThunk('carts/clearCart', async () => {
  try {
    const response = await axios.delete('http://localhost:3001/carts');
    return response.data;
  } catch (error) {
    console.error('Hata oluştu:', error);
  }
});

export const updateCartItemQuantity = createAsyncThunk(
  'carts/updateCartItemQuantity',
  async ({itemId, newQuantity}) => {
    try {
      await axios.patch(`http://localhost:3001/carts/${itemId}`, {
        quantity: newQuantity,
      });
      return {itemId, newQuantity};
    } catch (error) {
      throw error;
    }
  },
);
