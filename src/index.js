import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {Provider} from 'react-redux';
import {createStore, compose} from 'redux';
import reducers from './Components/reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers())

ReactDOM.render(<Provider store ={store}>
<App />
</Provider>, document.querySelector("#root"));