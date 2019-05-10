import React from 'react';
import {Provider} from 'react-redux';
import {createStore, compose} from 'redux';
import reducers from './Components/reducers/index';

const Root =  ({children, initialState={}})=>{
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers,initialState,composeEnhancers())
    return(
    <Provider store={store}>
        {children}
    </Provider>
    )
}

export default Root;