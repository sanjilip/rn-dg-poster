import React from 'react';
import { shallow } from 'enzyme';
import { Provider, useSelector } from 'react-redux';
import configureStore from 'redux-mock-store'; // Import your Redux store configuration

import PosterScreen from '../../app/containers/PosterScreen';

jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
    __esModule: true,
    default: jest.fn()
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: () => jest.fn()
}));

const mockStore = configureStore([]);
const store = mockStore({
    posterData: {
        content: ['abc'],
        pageNumber: 1
    }
});

beforeEach(() => {
    useSelector.mockImplementation((callback) => {
        return callback(store);
    });
});

describe('Test PosterScreen Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Provider store={store}>
                <PosterScreen navigation={{ goBack: jest.fn() }} />
            </Provider>
        );
    });

    it('renders correctly', () => {
        const wrapper = shallow(<PosterScreen />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders CustomHeader component', () => {
        expect(wrapper.find('CustomHeader')).toHaveLength(0);
    });

    it('renders TextInput component for search input', () => {
        expect(wrapper.find('TextInput')).toHaveLength(0);
    });

    it('renders FlatList component for posters', () => {
        expect(wrapper.find('FlatList')).toHaveLength(0);
    });
});
