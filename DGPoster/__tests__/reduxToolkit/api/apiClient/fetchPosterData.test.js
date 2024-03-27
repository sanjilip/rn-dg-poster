import { fetchPosterData } from '../../../../app/reduxToolkit/api/apiClient/fetchPosterData'; // Assuming the file name is fetchPosterData.js
import request from '../../../../app/reduxToolkit/api/apiClient/index';
import { getRoutes } from '../../../../app/reduxToolkit/api/apiClient/utility/routes';

jest.mock('../../../../app/reduxToolkit/api/apiClient/index', () => ({
    __esModule: true,
    default: jest.fn()
}));

jest.mock('../../../../app/reduxToolkit/api/apiClient/utility/routes', () => ({
    __esModule: true,
    getRoutes: jest.fn()
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => jest.fn()
}));

describe('Test fetchPosterData', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should call getRoutes and request with correct parameters', async () => {
        const key = 'testKey';
        const data = {}; // Example data
        const mockUrl = 'mock-url';
        const mockError = new Error('Mock error');

        getRoutes.mockReturnValueOnce(mockUrl);
        request.mockRejectedValueOnce(mockError);

        try {
            await fetchPosterData(key, data);
        } catch (error) {
            expect(getRoutes).toHaveBeenCalledWith(key, data);
            expect(request).toHaveBeenCalledWith({ key, url: mockUrl });
            expect(error).toEqual(mockError);
        }
    });
});
