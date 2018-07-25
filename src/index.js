import React from 'react';
import ReactDOM from 'react-dom';

import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import App from './containers/App/App';
import './index.css';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production'){
    middleware.push(createLogger());
}

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
);
