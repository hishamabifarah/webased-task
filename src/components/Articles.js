import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import moment from 'moment/min/moment-with-locales';

const Articles = ({ article }) => {

    const { title, description, urlToImage, source, publishedAt } = article;
    const time = moment(publishedAt).format('LLL');

    return (
        <Container>
            <Image source={{ uri: urlToImage }} />
            <Title>
                {title}
            </Title>
            <Description numberOfLines={2}>
                {description}
            </Description>
            {/* <Source>
                {Object.entries(source).map(([key, v]) => {
                    return <View key={key}><Text>{v}</Text></View>
                })}
            </Source> */}
            <Date>
                {time}
            </Date>
        </Container>
    )
}

const Container = styled.View`
    border-width: 0px;
    width: 100%;
    padding: 5px;
`;

const Image = styled.Image`
    width:100%;
    height:200px
`;

const Title = styled.Text`
    padding: 5px;
    font-size: 17px;
    color: black;
    background-color: white;
    font-weight: bold;
`;

const Date = styled.Text`
    padding: 5px;
    font-size: 17px;
    color: black;
    background-color: white;
    font-weight: bold;
`;

const Source = styled.Text`
    padding: 5px;
    font-size: 17px;
    color: black;
    background-color: white;
    font-weight: bold;
`;

const Description = styled.Text`
    font-size:15px;
    padding: 5px;
    color:black;
    background-color:white
`;

export default Articles;