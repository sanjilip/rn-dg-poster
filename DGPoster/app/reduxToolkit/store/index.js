import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { rootReducer } from '../slices';

const middleware = [];

if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middleware.push(logger);
}

const persistConfig = {
    key: 'DGPoster',
    storage: AsyncStorage
    // whitelist: ['posterData'] // add redux state here if state wants to persist on app kill
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(middleware)
});

export const persistedStore = persistStore(store);
