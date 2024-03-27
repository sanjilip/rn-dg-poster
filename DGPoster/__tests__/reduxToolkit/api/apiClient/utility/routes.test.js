import {
    getRoutes,
    requestHeaders,
    httpRequestMethod,
    requestAcceptanceType
} from '../../../../../app/reduxToolkit/api/apiClient/utility/routes.js'; // Assuming the file name is utility.js
import {
    HEADER_TYPES,
    METHODS
} from '../../../../../app/reduxToolkit/api/apiClient/utility/constants';
import { API_KEYS } from '../../../../../app/reduxToolkit/api/apiClient/utility/apiKeys.js';

describe('Test getRoutes function', () => {
    it('should return the correct route for posterData API key', () => {
        const data = 1;
        const result = getRoutes(API_KEYS.posterData, data);
        expect(result).toBe(
            'https://sanjilip.github.io/api/CONTENTLISTINGPAGE-PAGE1.json'
        );
    });

    it('should return null for unknown API keys', () => {
        const result = getRoutes('unknownKey', 1);
        expect(result).toBeNull();
    });
});

describe('Test requestHeaders function', () => {
    it('should return JSON headers by default', () => {
        const result = requestHeaders();
        expect(result).toEqual({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Accept-Charset': 'UTF-8'
        });
    });

    it('should return HTML headers when type is HTML', () => {
        const result = requestHeaders(HEADER_TYPES.HTML);
        expect(result).toEqual({
            'Content-Type': 'application/json',
            Accept: 'text/html,application/xml',
            'Accept-Charset': 'UTF-8'
        });
    });
});

describe('Test httpRequestMethod function', () => {
    it('should return GET method for posterData API key', () => {
        const result = httpRequestMethod(API_KEYS.posterData);
        expect(result).toBe(METHODS.GET);
    });

    it('should return GET method for unknown API keys', () => {
        const result = httpRequestMethod('unknownKey');
        expect(result).toBe(METHODS.GET);
    });
});

describe('Test requestAcceptanceType function', () => {
    it('should return JSON type for posterData API key', () => {
        const result = requestAcceptanceType(API_KEYS.posterData);
        expect(result).toBe(HEADER_TYPES.JSON);
    });

    it('should return JSON type for unknown API keys', () => {
        const result = requestAcceptanceType('unknownKey');
        expect(result).toBe(HEADER_TYPES.JSON);
    });
});
