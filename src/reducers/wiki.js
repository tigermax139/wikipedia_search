import {
    FETCH_WIKI_START,
    FETCH_WIKI_SUCCESS,
    FETCH_WIKI_FAILURE
} from '../constants/actionTypes';

const initialState = { pages: [], isLoad: false, isError: false };

const wiki = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WIKI_START :
            return {
                ...state,
                pages  : action.payload,
                isLoad : false,
                isError: false
            };
        case FETCH_WIKI_SUCCESS:
            return {
                ...state,
                pages  : action.payload.query !== undefined && action.payload.query.pages !== undefined
                    ? Object.values(action.payload.query.pages)
                    :  [] , // return empty array when wiki not found any articles
                isLoad : true,
                isError: false
            };
        case FETCH_WIKI_FAILURE:
            return{
                ...state,
                pages  : action.payload,
                isLoad : true,
                isError: true
            };
        default: return state;
    }
};

export default wiki;