import { STATUS_CODES } from '../../../../../app/reduxToolkit/api/apiClient/utility/constants';
import { handleApiResponse } from '../../../../../app/reduxToolkit/api/apiClient/utility/handleApiResponse';

describe('Test handleApiResponse function', () => {
    it('should return response for SUCCESS status code', () => {
        const response = {
            status: STATUS_CODES.SUCCESS,
            data: 'response data'
        };
        const rejectWithValue = jest.fn(); // Mocking rejectWithValue function
        const result = handleApiResponse(response, rejectWithValue);
        expect(result).toBe(response);
        expect(rejectWithValue).not.toHaveBeenCalled();
    });

    it('should reject response for BAD_REQUEST status code', () => {
        const response = {
            status: STATUS_CODES.BAD_REQUEST,
            data: 'error message'
        };
        const rejectWithValue = jest.fn(); // Mocking rejectWithValue function
        const result = handleApiResponse(response, rejectWithValue);
        expect(result).toBeUndefined();
        expect(rejectWithValue).toHaveBeenCalledWith(response);
    });

    it('should reject response for UNAUTHORIZED status code', () => {
        const response = {
            status: STATUS_CODES.UNAUTHORIZED,
            data: 'error message'
        };
        const rejectWithValue = jest.fn(); // Mocking rejectWithValue function
        const result = handleApiResponse(response, rejectWithValue);
        expect(result).toBeUndefined();
        expect(rejectWithValue).toHaveBeenCalledWith(response);
    });

    it('should reject response for NOT_MODIFIED status code', () => {
        const response = {
            status: STATUS_CODES.NOT_MODIFIED,
            data: 'error message'
        };
        const rejectWithValue = jest.fn(); // Mocking rejectWithValue function
        const result = handleApiResponse(response, rejectWithValue);
        expect(result).toBeUndefined();
        expect(rejectWithValue).toHaveBeenCalledWith(response);
    });

    it('should reject response for unknown status code', () => {
        const response = { status: 500, data: 'error message' }; // Assuming 500 is an unknown status code
        const rejectWithValue = jest.fn(); // Mocking rejectWithValue function
        const result = handleApiResponse(response, rejectWithValue);
        expect(result).toBeUndefined();
        expect(rejectWithValue).toHaveBeenCalledWith(response);
    });
});
