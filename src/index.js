import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';

import createSagaMiddleware from 'redux-saga';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import {comments} from './reducers';
import rootSaga from './sagas';
import {loadComments} from './actions';

import App from './components/app';
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

render (
	<Provider store={store}>
		<App/>
	</Provider>, 
	document.getElementById('app')
);