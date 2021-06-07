import React from 'react';
import { ScrollView } from 'react-native';
import { Divider } from '../elements/Divider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';
import styled from 'styled-components/native';
import moment from 'moment/min/moment-with-locales';

const NewsDetailScreen = ({ route }) => {

    const storeData = async (value) => {
        try {
            let obj = {
                title: value.title,
                image: value.urlToImage,
                description: value.description,
                source: value.source,
                timeStamp: dayjs(),
                source: value.source,
            }

            // get history array from localstorage
            // check if exists, if not create a new array
            const existingHistory = await AsyncStorage.getItem('history');
            let newHistory = JSON.parse(existingHistory);
            if (!newHistory) {
                newHistory = [];
            }

            // check if article exists in array 
            var title = obj.title;
            if(newHistory.some(article => article.title === title)){
                console.log("Object found inside the array.");
                // remove article before inserting new one
                try {
                    for (let i = 0; i < newHistory.length; i++) {
                        if(newHistory[i].title == title) {
                            newHistory.splice(i, 1);
                       }
                    }
                    console.log('Data removed')
                }
                catch(err) {
                    console.log(err)
                }
            } else{
                console.log("Object not found.");
            }

            // push new object into history array
            newHistory.push(obj);
            
            // save new object into local storage
            await AsyncStorage.setItem('history', JSON.stringify(newHistory))
                .then(() => {
                    console.log('success saving history')
                })
                .catch(() => {
                    console.log('error saving history')
                })
        } catch (err) {
            console.log('error', err);
        }
    } // end storeData()


    const { data } = route.params;
    storeData(data);

    let author = '';
    if(data.author === null){
        author = 'No Author Available';
    }else{
        author = `BY ${data.author.toUpperCase()}`
    }

    const time = moment(data.publishedAt).format('LLL');

    return (
        <ScrollView>
            <Title>{data.title}</Title>
            <Divider />
            <Author>{author}</Author>
            <Date>{time} / {data.source.name}</Date>
            <Image source={{ uri: data.urlToImage }} />
            <Description>{data.description}</Description>
        </ScrollView>
    )
}

const Title = styled.Text`
    font-size: 24px;
    margin: 24px;
    font-weight: bold;
`;

const Author = styled.Text`
    font-size: 16px;
    margin: 24px;
    font-weight: bold;
`;

const Image = styled.Image`
    width:100%;
    height:200px
`;

const Date = styled.Text`
    font-size: 16px;
    margin: 24px;
    font-weight: bold;
`;

const Description = styled.Text`
    font-size: 18px;
    margin: 24px;
    font-weight: bold;
`;

export default NewsDetailScreen;