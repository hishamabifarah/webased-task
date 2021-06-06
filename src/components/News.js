import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import {COLORS} from '../constants';
import Articles from '../components/Articles';

const News = ({ title, headlines }) => {
    
    const navigation = useNavigation();

    if (!headlines.length) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={headlines}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(headline) => headline.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() =>
                            navigation.navigate('DetailsScreen',
                                {
                                    data: item
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
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10,
        color: COLORS.primary,
        textAlign:'center'
    }
});

export default News;