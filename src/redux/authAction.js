import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// export const postLogin = createAsyncThunk('login/postLogin', async data => {
//   try {
//     const response = await axios.post('http://localhost:3001/login', data);
//     console.log('login', response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// });

export const postLogin = createAsyncThunk('login/postLogin', async data => {
  try {
    const response = await axios.post('http://localhost:3001/login', data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getRegister = createAsyncThunk(
  'register/getRegister',
  async () => {
    try {
      await axios.post('http://localhost:3001/register');
    } catch (error) {
      console.log(error);
    }
  },
);

export const postRegister = createAsyncThunk(
  'register/postRegister',
  async data => {
    try {
      const response = await axios.post('http://localhost:3001/register', data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);
