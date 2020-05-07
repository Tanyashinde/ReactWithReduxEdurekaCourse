import React from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import Home from './containers/home';
import store from './store';

reactDom.render(
    <Provider store={store}>
        <Home/>
    </Provider>, document.getElementById('root')
)

//url(/images/articles/${item.img})