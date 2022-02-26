
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import looger from './logger';

export default applyMiddleware(thunk, looger);