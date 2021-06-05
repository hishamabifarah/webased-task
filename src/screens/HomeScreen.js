import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNews } from '../redux/actions/newsActions';
import News from '../components/News';

const HomeScreen = ({navigation}) => {

    const { headlines } = useSelector(state => state.newsReducer);
    const dispatch = useDispatch();
    const fetchNews = () => dispatch(getNews());
    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <News
            headlines={headlines}
            title="Today's Picks"
        />

    )
}

export default HomeScreen;