import { configureStore } from '@reduxjs/toolkit';
import { booksApi } from './api/booksCreatedApi';


export const store = configureStore({
  reducer: {
    [booksApi.reducerPath] : booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(booksApi.middleware);
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch