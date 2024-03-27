import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistedStore } from './app/reduxToolkit/store';
import AppContainer from './app/navigation/AppContainer';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistedStore}>
                <AppContainer />
            </PersistGate>
        </Provider>
    );
};

export default App;
