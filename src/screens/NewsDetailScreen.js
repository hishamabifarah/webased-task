import React from 'react';
import { ScrollView, StyleSheet, Text, Image } from 'react-native';
import { Divider } from '../elements/Divider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';

const NewsDetailScreen = ({ route }) => {

    const storeData = async (value) => {
        try {
            let obj = [
                {
                    title: value.title,
                    image: value.urlToImage,
                    description: value.description,
                    source: value.source,
                    timeStamp: dayjs()
                }
            ]

            let allArr = await AsyncStorage.getItem('History');
            if (allArr === null) {
                console.log('ISNULL');
                var historyArr = [];
                historyArr.push(obj);

                console.log('historyArr', historyArr);
                await AsyncStorage.setItem('History', JSON.stringify(historyArr));
            } else {
                console.log('NOT NULL')
                var newArr = await AsyncStorage.getItem('History');
                console.log('newArr' , newArr);
                // newArr.concat(obj);
                var finalArr = newArr.concat(obj)
                await AsyncStorage.setItem('History', JSON.stringify(finalArr));
            }

            // historyArr.push(obj);

          //  alerts.push({num : 3, app:'helloagain_again',message:'yet another message'});
        } catch (e) {
            // saving error
        }
    }

    const { data } = route.params;
    storeData(data);

    // console.log('data', data);
    // let author = '';
    // if(data.author){
    //     author = 'BY' & data.author.toUpperCase();
    // }else{
    //     author = 'No Author Available';
    // }

    return (
        <ScrollView>
            <Text style={styles.title}>{data.title}</Text>
            <Divider />
            <Text style={styles.author}>{data.author}</Text>
            <Text style={styles.date}>{data.publihedAt}</Text>
            <Image style={styles.image} source={{ uri: data.urlToImage }} />
            <Text style={styles.description}>{data.description}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 24
    },
    author: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 24
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 8
    },
    image: {
        width: '100%',
        height: 200
    },
    description: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 24
    }
})

export default NewsDetailScreen;