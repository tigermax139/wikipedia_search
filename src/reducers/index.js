import { combineReducers } from 'redux';
import wiki                from './wiki';
import google              from './google';
import query               from './query';

export default combineReducers({
    wiki,
    google,
    query
});