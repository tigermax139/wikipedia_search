import {
    FETCH_GOOGLE_START,
    FETCH_GOOGLE_SUCCESS,
    FETCH_GOOGLE_FAILURE,
} from '../constants/actionTypes';

const initialState = { suggest: [], isLoad: false, isError: false};

const google = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GOOGLE_START :
            return {
                ...state,
                suggest  : action.payload,
                isLoad   : false,
                isError  : false
            };
        case FETCH_GOOGLE_SUCCESS:
            return {
                ...state,
                suggest  : action.payload.results.processed_keywords.slice(0, 6), // get only 6 first keywords
                isLoad   : true,
                isError  : false
            };
        case FETCH_GOOGLE_FAILURE:
            return{
                ...state,
                suggest  : action.payload,
                isLoad   : true,
                isError  : true
            };
        default: return state;
    }
};

export default google;