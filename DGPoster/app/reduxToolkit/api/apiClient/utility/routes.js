import { API_KEYS } from './apiKeys';
import { HEADER_TYPES, METHODS } from './constants';

//hosted route on github page -->  https://sanjilip.github.io/api/CONTENTLISTINGPAGE-PAGE1.json

const BASE_URL = 'https://sanjilip.github.io/api';

export const getRoutes = (key, data) => {
    switch (key) {
        case API_KEYS.posterData:
            return `${BASE_URL}/CONTENTLISTINGPAGE-PAGE${data}.json`;
        // add multiple routes here to make api request based on provided API_KEYS
        default:
            return null;
    }
};

const applicationJson = 'application/json';

export const requestHeaders = (type) => {
    // added basic headers, you can add more as per requirement
    let headers = {
        'Content-Type': applicationJson,
        Accept: applicationJson,
        'Accept-Charset': 'UTF-8'
    };

    if (type === HEADER_TYPES.HTML) {
        headers = {
            ...headers,
            Accept: 'text/html,application/xml'
        };
    }
    return headers;
};

export const httpRequestMethod = (key) => {
    switch (key) {
        case API_KEYS.posterData:
            return METHODS.GET;
        // add POST/PATCH/PUT/DELETE methods for expected result, default is set to GET
        default:
            return METHODS.GET;
    }
};

export const requestAcceptanceType = (key) => {
    switch (key) {
        case API_KEYS.posterData:
            return HEADER_TYPES.JSON;
        // add HTML if expected request type is HTML data, default is set to JSON
        default:
            return HEADER_TYPES.JSON;
    }
};
