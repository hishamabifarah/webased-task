import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import News from '../components/News';

const HistoryScreen = () => {

    const sortArray = (arr) => {
        const newArr = arr.sort((a,b) => new Date(b.timeStamp).getTime() - new Date(a.timeStamp).getTime());
        return newArr;
    };

    const [history, setHistory] = useState([])

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('history')
            if (value !== null) {
                setHistory(JSON.parse(value));
            }
        } catch (e) {
            console.log('error history', e);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <News
            headlines={sortArray(history)}
            title="History"
        />
    )
}

export default HistoryScreen;