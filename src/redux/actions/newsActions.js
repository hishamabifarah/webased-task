import {
    GET_NEWS,
    GET_SOURCES,
    GET_SOURCES_HEADLINES
} from '../types';

import newsApi from '../../api/newsApi';

const API_KEY = '5c383187e89f4da1b5d974e0b478c0ab';
const PARAMS = 'page=1';
const country = 'us';
const category = 'sports';

export const getSourcesHeadlines = (source) => {
    try {
        return async dispatch => {
            const res = await newsApi.get(`/top-headlines?sources=${source}&apiKey=${API_KEY}`)
            if (res.data) {
                dispatch({
                    type: GET_SOURCES_HEADLINES,
                    payload: res.data.articles,
                });
            } else {
                console.log('Unable to fetch top headlines for source');
            }
        };
    } catch (error) {
        console.log(`error getting headlines for source : ${error}`)
    }
}

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
        console.log(`error getting sources : ${error}`)
    }
}

export const getNews = () => {
    try {
        return async dispatch => {
            const res = await newsApi.get(`/top-headlines?country=${country}&category=${category}&${PARAMS}&apiKey=${API_KEY}`)
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
        console.log(`error getting headlines : ${error}`)
    }
};