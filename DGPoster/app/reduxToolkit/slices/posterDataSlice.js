import { createSlice } from '@reduxjs/toolkit';

import { createApiActions } from '../api/apiClient/utility/constants';
import { API_KEYS } from '../api/apiClient/utility/apiKeys';

const initialState = {
    loading: false,
    data: null,
    content: [],
    pageNumber: 1,
    error: null
};

export const fetchPosterData = createApiActions(API_KEYS.posterData);

export const posterDataSlice = createSlice({
    initialState,
    name: 'posterData',
    reducers: {
        updatePosterData: (state, action) => {
            state.data = action.payload;
        },
        resetPosterData: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosterData.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchPosterData.fulfilled, (state, action) => {
                const {
                    page: {
                        'page-num-requested': pageNumber,
                        'content-items': { content }
                    }
                } = action.payload;

                state.content = setContentData(state, pageNumber, content);
                state.pageNumber = Number(pageNumber);
                state.loading = false;
                state.data = action.payload;
                state.error = false;
            })
            .addCase(fetchPosterData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

const setContentData = (state, pageNumber, content) => {
    if (
        state.pageNumber !== Number(pageNumber) &&
        state.content.length !== 0 &&
        pageNumber != 1
    ) {
        return [...state.content, ...content];
    } else {
        return content;
    }
};

export const { updatePosterData, resetPosterData } = posterDataSlice.actions;

export default posterDataSlice.reducer;
