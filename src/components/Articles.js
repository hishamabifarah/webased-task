import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

// dayjs
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

const Articles = ({ article }) => {

    dayjs.extend(LocalizedFormat)
    const { title, description, urlToImage, source, publishedAt  } = article;
    // const time = dayjs(publishedAt).format('L LT')();

    return (
        <View style={styles.articleContainer}>
            <Image style={styles.articleImage} source={{ uri: urlToImage }} />
            <Text style={styles.articleTitle}>
                {title}
            </Text>
            <Text numberOfLines={2} style={styles.articleDescription}>
                {description}
            </Text>
            <Text style={styles.articleTitle}>
                {Object.entries(source).map(([key, v]) => {
                    return <View key={key}><Text>{v}</Text></View>
                })}
            </Text>
            <Text style={styles.articleTitle}>
                {/* {time} */}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    articleContainer: {
        borderWidth: 0,
        width: '100%',
        padding: 5
    },
    articleImage: {
        height: 200,
        width: '100%',
    },
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