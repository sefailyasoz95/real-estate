import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AdvertData, CarouselData } from '../../Constants/data'
import { getSomeData } from '../actions/actions'

export const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
  isAuthenticated: true,
  user: {},
  CarouselData: CarouselData,
  AdvertData: AdvertData,
}

export const coreReducer = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeSomething: (state, action: PayloadAction<string>) => {
      state.message = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSomeData.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(
        getSomeData.fulfilled,
        (state, action: PayloadAction<boolean>) => {
          state.isLoading = false
          state.isAuthenticated = action.payload
        }
      )
      .addCase(getSomeData.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
      })
  },
})

export const { changeSomething } = coreReducer.actions

export default coreReducer.reducer
