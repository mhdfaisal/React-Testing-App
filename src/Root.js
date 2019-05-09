import React from 'react';
import {Provider} from 'react-redux';
import {createStore, compose} from 'redux';
import reducers from './Components/reducers/index';

const Root =  (props)=>{
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers,composeEnhancers())
    return(
    <Provider store={store}>
        {props.children}
    </Provider>
    )
}

export default Root;