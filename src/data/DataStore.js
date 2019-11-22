import { createStore, applyMiddleware } from 'redux';
import { QuizzesReducer } from './QuizzesReducer';
import { asyncActions } from './AsyncMiddleware';

export const QuizzesDataStore = createStore(QuizzesReducer,applyMiddleware(asyncActions));