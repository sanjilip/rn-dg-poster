import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

Enzyme.configure({ adapter: new Adapter() });

export const navigation = {
    navigate: jest.fn(),
    goBack: jest.fn()
};

jest.mock('@react-navigation/native', () => ({
    NavigationContainer: ({ children }) => <div>{children}</div>
}));

jest.mock('@react-navigation/native-stack', () => ({
    createNativeStackNavigator: () => ({
        Navigator: ({ children }) => <div>{children}</div>,
        Screen: ({ children }) => <div>{children}</div>
    })
}));

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-redux', () => ({
    Provider: jest.fn(({ children }) => children)
}));

jest.mock('redux-persist/integration/react', () => ({
    PersistGate: jest.fn(({ children }) => children)
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: () => jest.fn(),
    connect: () => jest.fn()
}));
