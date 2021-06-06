import React from 'react';
import { ScrollView } from 'react-native';
import { Divider } from '../elements/Divider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';
import styled from 'styled-components/native';

const NewsDetailScreen = ({ route }) => {

    const storeData = async (value) => {
        try {
            let obj = {
                title: value.title,
                image: value.urlToImage,
                description: value.description,
                source: value.source,
                timeStamp: dayjs()
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
                alert("Object found inside the array.");
                try {
                    await AsyncStorage.removeItem(title);
                    console.log('Data removed')
                }
                catch(exception) {
                    console.log(exception)
                }
            } else{
                alert("Object not found.");
            }

            newHistory.push(obj);
            
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

    // let author = '';
    // if(data.author){
    //     author = 'BY' & data.author.toUpperCase();
    // }else{
    //     author = 'No Author Available';
    // }

    return (
        <ScrollView>
            <Title>{data.title}</Title>
            <Divider />
            <Author>{data.author}</Author>
            <Date>{data.publishedAt} / {data.source.name}</Date>
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