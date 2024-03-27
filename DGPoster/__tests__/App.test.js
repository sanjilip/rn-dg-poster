import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from 'redux-mock-store';

import App from '../App';
import AppContainer from '../app/navigation/AppContainer';

const mockStore = configureStore([]);
const store = mockStore({});

describe('Test App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders Provider with store', () => {
        const providerStore = wrapper.find(Provider).props().store;
        expect(typeof providerStore.dispatch).toBe('function');
    });

    it('renders PersistGate with persistor', () => {
        expect(wrapper.find(PersistGate).props().persistor).toBeDefined();
    });

    it('renders AppContainer inside PersistGate', () => {
        expect(wrapper.find(PersistGate).find(AppContainer).exists()).toBe(
            true
        );
    });
});
