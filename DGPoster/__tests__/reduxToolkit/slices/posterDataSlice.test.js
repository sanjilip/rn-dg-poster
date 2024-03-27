import {
    posterDataSlice,
    fetchPosterData
} from '../../../app/reduxToolkit/slices/posterDataSlice';

describe('Test posterDataSlice reducers', () => {
    it('should handle updatePosterData', () => {
        const prevState = {
            loading: false,
            data: null,
            content: [],
            pageNumber: 1,
            error: null
        };
        const action = {
            type: 'posterData/updatePosterData',
            payload: { data: 'testData' }
        };
        const nextState = posterDataSlice.reducer(prevState, action);
        expect(nextState).toEqual({
            loading: false,
            data: { data: 'testData' },
            content: [],
            pageNumber: 1,
            error: null
        });
    });

    it('should handle resetPosterData', () => {
        const prevState = {
            loading: true,
            data: { testData: 'testData' },
            content: [{ id: 1, title: 'Test Content' }],
            pageNumber: 2,
            error: 'Test Error'
        };
        const action = { type: 'posterData/resetPosterData' };
        const nextState = posterDataSlice.reducer(prevState, action);
        expect(nextState).toEqual({
            loading: false,
            data: null,
            content: [],
            pageNumber: 1,
            error: null
        });
    });
});

describe('Test posterDataSlice extra reducers', () => {
    it('should handle fetchPosterData.pending', () => {
        const prevState = {
            loading: false,
            data: null,
            content: [],
            pageNumber: 1,
            error: false
        };
        const nextState = posterDataSlice.reducer(
            prevState,
            fetchPosterData.pending
        );
        expect(nextState).toEqual({
            loading: true,
            data: null,
            content: [],
            pageNumber: 1,
            error: false
        });
    });

    it('should handle fetchPosterData.fulfilled', () => {
        const prevState = {
            loading: true,
            data: null,
            content: [],
            pageNumber: 1,
            error: false
        };
        const action = {
            type: fetchPosterData.fulfilled.type,
            payload: {
                page: {
                    'page-num-requested': 2,
                    'content-items': {
                        content: [{ id: 1, title: 'Test Content' }]
                    }
                }
            }
        };
        const nextState = posterDataSlice.reducer(prevState, action);
        expect(nextState).toEqual({
            loading: false,
            data: action.payload,
            content: [{ id: 1, title: 'Test Content' }],
            pageNumber: 2,
            error: false
        });
    });

    it('should handle fetchPosterData.rejected', () => {
        const prevState = {
            loading: true,
            data: null,
            content: [],
            pageNumber: 1,
            error: null
        };
        const action = {
            type: fetchPosterData.rejected.type,
            payload: 'Test Error'
        };
        const nextState = posterDataSlice.reducer(prevState, action);
        expect(nextState).toEqual({
            loading: false,
            data: null,
            content: [],
            pageNumber: 1,
            error: 'Test Error'
        });
    });
});
