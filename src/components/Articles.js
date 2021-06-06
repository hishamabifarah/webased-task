import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components/native';
// dayjs
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

const Articles = ({ article }) => {

    dayjs.extend(LocalizedFormat)
    const { title, description, urlToImage, source, publishedAt  } = article;
    // const time = dayjs(publishedAt).format('L LT')();

    return (
        <Container>
            <Image  source={{ uri: urlToImage }} />
            <Text style={styles.articleTitle}>
                {title}
            </Text>
            <Text numberOfLines={2} style={styles.articleDescription}>
                {description}
            </Text>
            {/* <Text style={styles.articleTitle}>
                {Object.entries(source).map(([key, v]) => {
                    return <View key={key}><Text>{v}</Text></View>
                })}
            </Text> */}
            <Text style={styles.articleTitle}>
                {publishedAt}
            </Text>
        </Container>
    )
}

const Container = styled.View`
    borderWidth: 0,
    width: '100%',
    padding: 5px
`;

const Image = styled.Image`
    width:100%;
    height:200px
`;

const Title = styled.Text `
    padding: 5px,
    fontSize: 17px,
    color: 'black',
    backgroundColor: 'white',
    fontWeight: 'bold'
`;

const styles = StyleSheet.create({
    articleTitle: {
        padding: 5,
        fontSize: 17,
        color: 'black',
        backgroundColor: 'white',
        fontWeight: 'bold'
    },
    articleDescription: {
        fontSize: 15,
        padding: 5,
        color: 'black',
        backgroundColor: 'white',
    }
})

export default Articles;