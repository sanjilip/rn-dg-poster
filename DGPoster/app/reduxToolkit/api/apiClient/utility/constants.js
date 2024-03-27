import { createAsyncThunk } from '@reduxjs/toolkit';

export const createApiActions = (key) => createAsyncThunk(key); // returns action to be called against particular api

export const DEFAULT_TIMEOUT = 60 * 1000; // max default timeout

export const METHODS = {
    // different methods to be used in api request
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    OPTIONS: 'OPTIONS',
    PATCH: 'PATCH'
};

export const HEADER_TYPES = {
    // different header types to be used in api request
    HTML: 'html',
    JSON: 'json'
};

export const STATUS_CODES = {
    // different status codes to be received from api response
    SUCCESS: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    ACCESS_DENIED: 403,
    NOT_FOUND: 404,
    PASSWORD_FIELD_EMPTY: 1001,
    NOT_MODIFIED: 304,
    SERVICE_UNAVAILABLE: 503,
    NO_NETWORK: 'ERR_NETWORK'
};
