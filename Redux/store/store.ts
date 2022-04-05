import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import coreReducer from '../reducers/reducer'

const store = configureStore({
  reducer: {
    global: coreReducer,
  },
})
export default store

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector
