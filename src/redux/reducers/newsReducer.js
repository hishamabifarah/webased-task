import { GET_NEWS , GET_SOURCES } from '../types';

const initialState = {
    headlines: [],
    favorites: [],
    sources : [],
};

function newsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NEWS:
            return { ...state, headlines: action.payload };
        case GET_SOURCES :
            return {...state , sources: action.payload}
        default:
            return state;
    }
}
export default newsReducer;