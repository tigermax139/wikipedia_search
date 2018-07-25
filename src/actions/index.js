import {
    FETCH_WIKI_START,
    FETCH_WIKI_SUCCESS,
    FETCH_WIKI_FAILURE,
    FETCH_GOOGLE_START,
    FETCH_GOOGLE_SUCCESS,
    FETCH_GOOGLE_FAILURE,
    SET_SEARCH_QUERY
}                    from '../constants/actionTypes';
import {
    fetchSuggestApi,
    fetchArticlesApi
}                    from '../api';
import { getQuery }  from '../selectors';

// fetch articles
export const fetchArticles = () => async (dispatch, getState) => {
    dispatch({ type: FETCH_WIKI_START });
    const query = getQuery(getState());
    try {
        const articles = await fetchArticlesApi(query);
        dispatch({
            type    : FETCH_WIKI_SUCCESS,
            payload : articles,
            error   : false
        })
    }
    catch (e) {
        dispatch({
            type    : FETCH_WIKI_FAILURE,
            payload : e,
            error   : true
        })
    }
};

// fetch suggest
export const fetchSuggest = () => async (dispatch, getState) => {
    dispatch({ type: FETCH_GOOGLE_START});
    const query = getQuery(getState());
    try {
        const suggest = await fetchSuggestApi(query);
        dispatch({
            type    : FETCH_GOOGLE_SUCCESS,
            payload : suggest,
            error   : false
        });
    }
    catch (e) {
        dispatch({
            type    : FETCH_GOOGLE_FAILURE,
            payload : e,
            error   : true
        })
    }
};

// set new Query to store
export const setQuery = query => dispatch => {
    dispatch({
        type    : SET_SEARCH_QUERY,
        payload : query
    })
};