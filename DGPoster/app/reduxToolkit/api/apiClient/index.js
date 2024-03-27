import { Platform } from 'react-native';
import axios from 'axios';

import {
    DEFAULT_TIMEOUT,
    HEADER_TYPES,
    METHODS,
    STATUS_CODES
} from './utility/constants';
import { API_KEYS } from './utility/apiKeys';
import { requestHeaders } from './utility/routes';

axios.defaults.headers.common['User-Agent'] =
    Platform.OS === 'ios' ? 'iPhone' : 'Android';

// options can contain the following arguments:
// key, url, data, type, headers, method, timeout etc
export const request = (options) => {
    const {
        key,
        url,
        data,
        type = HEADER_TYPES.JSON,
        headers = requestHeaders(),
        method = METHODS.GET,
        timeout = DEFAULT_TIMEOUT
    } = options;
    const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

    return axios({
        url,
        method,
        headers,
        [dataOrParams]: data,
        timeout
    })
        .then((response) => {
            switch (key) {
                case API_KEYS.posterData:
                    return response?.data;
                default:
                    if (type === HEADER_TYPES.HTML) {
                        return response;
                    }
                    return response?.data;
            }
        })
        .catch((error) => {
            if (error?.code === STATUS_CODES.NO_NETWORK) {
                return Promise.reject(error);
            }
            return error;
        });
};

export default request;
