import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers';

// redux thunk and redux logger
function createMiddlewares() {
    let middlewares = [thunkMiddleware];
    // I just show log when development mode
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(
            createLogger({
                level: 'info',
                collapsed: true,
                stateTransformer: state => {
                    let newState = {};

                    for (let i of Object.keys(state)) {
                        newState[i] = state[i];
                    }

                    return newState;
                },
            }),
        );
    }

    return middlewares;
}

export const initializeStore = () => {
    let middlewares = createMiddlewares();

    return createStore(rootReducer, compose(applyMiddleware(...middlewares)));
};

export default App => {
    return class AppWithRedux extends Component {
        constructor(props) {
            super(props);
            this.reduxStore = initializeStore();
        }

        render() {
            return <App {...this.props} reduxStore={this.reduxStore} />;
        }
    };
};
