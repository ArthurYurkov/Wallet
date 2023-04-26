import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { transactionsReducer } from './transactions/transactions-slice';
import { currencyReducer } from './mono-currency/currency-slice';
import { userReducer } from './user/user-slice';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const authPersistConfig = {
  key: 'AUTH',
  storage,
  blacklist: ['user'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    transactions: transactionsReducer,
    currency: currencyReducer,
    user: userReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
