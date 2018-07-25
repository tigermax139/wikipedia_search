import axios        from 'axios';
import config       from '../config';

// make request to wikipedia
export const fetchArticlesApi = async (query) => {
    const { data } = await axios.get(config.wikiURL + query);
    return data;
};


// make request to google
export const fetchSuggestApi = async (query) => {
    const  sufix = '&language=en&country=us&google=http://www.google.com&service=0';
    const  res   = await fetch(config.googleSuggest + query + sufix);
    return res.json();
};