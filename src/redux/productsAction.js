import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await axios.get('http://localhost:3001/products');
    return response.data;
  },
);

export const getProduct = createAsyncThunk('products/getProduct', async id => {
  try {
    const response = await axios.get(`http://localhost:3001/products/${id}`);
    return response.data;
  } catch (error) {
    console.log('Failed to fetch product.');
  }
});

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async data => {
    await axios.post('http://localhost:3001/products', data);
    return data;
  },
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async id => {
    await axios.delete(`http://localhost:3001/products/${id}`);
    return id;
  },
);

export const getCategories = createAsyncThunk(
  'products/getCategories',
  async category => {
    try {
      const response = await axios.get(
        `http://localhost:3001/products${category}`,
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

export const getFavorites = createAsyncThunk(
  'products/getFavorites',
  async () => {
    const response = await axios.get(`http://localhost:3001/products`);
    return response.data;
  },
);

export const updateFavorite = createAsyncThunk(
  'products/updateFavorite',
  async ({id, favorite}) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/products/${id}`,
        {
          favorite: favorite,
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);
