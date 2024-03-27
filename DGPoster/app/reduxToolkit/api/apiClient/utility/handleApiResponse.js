// sample file to handle response based on different status codes
// flexible error handling can be achieved by below code

import { STATUS_CODES } from './constants';

export const handleApiResponse = (response, rejectWithValue) => {
    const status = response?.status;

    if (status == STATUS_CODES.SUCCESS) {
        // returning response for 200 status code
        return response;
    }
    if (
        status >= STATUS_CODES.BAD_REQUEST ||
        status === STATUS_CODES.NOT_MODIFIED ||
        status === STATUS_CODES.UNAUTHORIZED
    ) {
        // rejecting response based on different status code
        return rejectWithValue(response);
    }
};
