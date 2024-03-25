import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async data => {
    const response = await axios.get('http://localhost:3001/' + data);
    return response.data;
  },
);

export const updateFavorite = createAsyncThunk(
  'categories/updateFavorite',
  async ({id, favorite}) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/categories/${id}`,
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
