import { GET_NEWS , GET_SOURCES } from '../types';
import newsApi from '../../api/newsApi';

const API_KEY = 'c31ca0c609b843ef93f7ef32b1392b56';
const PARAMS = 'page=1';

export const getSources = () => {
    try {
        return async dispatch => {
            const res = await newsApi.get(`/sources?apiKey=${API_KEY}`)
            if (res.data) {
                dispatch({
                    type: GET_SOURCES,
                    payload: res.data.sources,
                });
            } else {
                console.log('Unable to fetch top headlines');
            }
        };
    } catch (error) {
        console.log(`error : ${error}`)
    }
}

export const getNews = () => {
    try {
        return async dispatch => {
            const res = await newsApi.get(`/top-headlines?country=us&${PARAMS}&apiKey=${API_KEY}`)
            if (res.data) {
                dispatch({
                    type: GET_NEWS,
                    payload: res.data.articles,
                });
            } else {
                console.log('Unable to fetch top headlines');
            }
        };
    } catch (error) {
        console.log(`error : ${error}`)
    }
};