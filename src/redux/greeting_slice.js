import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk('greeting/fetchMessage', async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/api/v1/messages/random');
    return response.data;
  } catch (error) {
    throw error;
  }
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.greeting = action.payload.greeting;
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
