import { createAsyncThunk } from '@reduxjs/toolkit';

import request from './index';
import { getRoutes } from './utility/routes';

export const fetchPosterData = (key, data) => {
    return createAsyncThunk(
        key,
        async (_, { getState, dispatch, rejectWithValue }) => {
            const url = getRoutes(key, data);

            return (
                request({ key, url })
                    // We can add multiple arguments in request object
                    // example key, url, data, type, headers, method, timeout etc
                    .then((response) => response)
                    .catch((error) => {
                        return rejectWithValue(error);
                    })
            );
        }
    ).call();
};
