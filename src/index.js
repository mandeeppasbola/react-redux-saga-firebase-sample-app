import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import createSagaMiddleware from 'redux-saga';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import comments from './reducers/comments';
import rootSaga from './sagas';

import App from './components/app';

import {loadComments} from './actions/commentActions';
import './styles/app.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	combineReducers({
		comments
	}),
	composeEnhancers(applyMiddleware(sagaMiddleware, reduxImmutableStateInvariant()))
  );

sagaMiddleware.run(rootSaga);

store.dispatch(loadComments());

render (
	<Provider store={store}>
		<BrowserRouter>
				<Route path="/" component={App}/>
    	</BrowserRouter>
	</Provider>, 
	document.getElementById('app')
	);