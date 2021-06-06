import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNews } from '../redux/actions/newsActions';
import News from '../components/News';
import { ScrollView } from 'react-native';

const HomeScreen = () => {

    const { headlines } = useSelector(state => state.newsReducer);
    const dispatch = useDispatch();
    const fetchNews = () => dispatch(getNews());
    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <ScrollView>
        <News
            headlines={headlines}
            title="Today's Picks"
        />
        </ScrollView>
    )
}

export default HomeScreen;