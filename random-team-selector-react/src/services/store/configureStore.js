import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import rootReducer from '../reducers';

const apiClient = axios.create({ //all axios can be used, shown in axios documentation
  baseURL: 'https://random-team-selector-43f41.firebaseio.com',
  responseType: 'json'
});

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            axiosMiddleware(apiClient)
        ),
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}