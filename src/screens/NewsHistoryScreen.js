import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import News from '../components/News';

const HistoryScreen = () => {
    
    let history = '';
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('History')
            if (value !== null) {
                // value previously stored
                // console.log('history' , JSON.parse(value));
                history = JSON.parse(value)
                console.log('value in get data', history);
            }
        } catch (e) {
            // error reading value
            console.log('error history', e);
        }
    }


    useEffect(() => {
        getData();
    }, []);


    return (
        <News
            headlines={history}
            title="Today's Picks"
        />
    )
}

const styles = StyleSheet.create({

})

export default HistoryScreen;