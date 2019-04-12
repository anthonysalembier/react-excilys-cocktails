// Logger with default options
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import recipeReducer from './reducer';

export default function configureStore(initialState) {
    return createStore(recipeReducer, initialState, applyMiddleware(logger));
}