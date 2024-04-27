import { configureStore } from '@reduxjs/toolkit';
import { apiAuth } from '../(Views)/(Auth)/(Services)';

const store = configureStore({
  reducer: {
    [apiAuth.reducerPath]: apiAuth.reducer
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(apiAuth.middleware)
});

export type RootStore = ReturnType<typeof store.getState>;

export default store;
