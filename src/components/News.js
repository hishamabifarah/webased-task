import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from '@react-navigation/native'
import Articles from '../components/Articles';

const News = ({ title, headlines, navigation }) => {
    console.log('headlines news', headlines)
    if (!headlines.length) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={headlines}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(headline) => headline.publihedAt}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() =>
                            navigation.navigate('NewsDetailScreen',
                                {
                                    data: item,
                                })}>
                            <Articles article={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        marginTop: 50
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10,
        color: '#00bcd4',
        textAlign:'center'
    }
});

export default (News);