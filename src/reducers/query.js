import {
    SET_SEARCH_QUERY
} from '../constants/actionTypes';

const initialState = { query: '' };

const query = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_QUERY:
            return({
                ...state,
                query: action.payload
            });
        default: return state;
    }
};

export default query;