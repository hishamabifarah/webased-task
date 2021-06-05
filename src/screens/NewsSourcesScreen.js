import React, { useEffect } from 'react';
import { View, StyleSheet, Text ,FlatList} from 'react-native';
import { getSources } from '../redux/actions/newsActions';
import { useSelector, useDispatch } from 'react-redux';

 const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height:0,
          margin: 8,
          backgroundColor: "#000",
        }}
      />
    );
  }

const NewsSourceScreen = () => {

    const { sources } = useSelector(state => state.newsReducer);
    const dispatch = useDispatch();
    const fetchSources = () => dispatch(getSources());
    useEffect(() => {
        fetchSources();
    }, []);

    console.log('sources screen' , sources)

        return (
            <View style={styles.container}>
              <FlatList
                data={sources}
                ItemSeparatorComponent = {FlatListItemSeparator}
                renderItem={({item}) => <View><Text style={styles.item}>{item.name}</Text></View>}
              />
            </View>
          );
    
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 20,
      fontSize: 18,
      height: 70,
    },
  });

export default NewsSourceScreen;