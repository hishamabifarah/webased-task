import { 
    GET_NEWS, 
    GET_SOURCES, 
    GET_SOURCES_HEADLINES 
} from '../types';

const initialState = {
    headlines: [],
    favorites: [],
    sources: [],
    sourceHeadlines : [],
};

function newsReducer(state = initialState, action) {    
    switch (action.type) {
       
        case GET_NEWS:
            return { ...state, headlines: action.payload };
        case GET_SOURCES:
            return { ...state, sources: action.payload }
        case GET_SOURCES_HEADLINES:
            return { ...state, sourceHeadlines: action.payload }
        default:
            return state;
    }
    
}
export default newsReducer;