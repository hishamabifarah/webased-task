import React, { useEffect } from 'react';
import {  StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getSourcesHeadlines } from '../redux/actions/newsActions';
import News from '../components/News';

const NewsSourceScreen = ({route}) => {

    const { data } = route.params;
    // const id = data.id;

    const { sourceHeadlines } = useSelector(state => state.newsReducer);
    const dispatch = useDispatch();
    const fetchSourceNews = () => dispatch(getSourcesHeadlines(data.id));
    useEffect(() => {
        fetchSourceNews();
    }, []);

    return (
        <News
            headlines={sourceHeadlines}
            title="Today's Picks"
        />
    )
}

const styles = StyleSheet.create({

})

export default NewsSourceScreen;