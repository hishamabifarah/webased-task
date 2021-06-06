import React, { useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { getSources } from '../redux/actions/newsActions';
import { useSelector, useDispatch } from 'react-redux';
import { Divider } from '../elements/Divider';

const NewsSourceScreen = ({ navigation }) => {

  const { sources } = useSelector(state => state.newsReducer);
  const dispatch = useDispatch();
  const fetchSources = () => dispatch(getSources());

  useEffect(() => {
    fetchSources();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={sources}
        ItemSeparatorComponent={Divider}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <View style={styles.projectRow}>
                <View style={styles.projectText}>
                  <Text style={styles.itemName}>{item.name}</Text>
                </View>
                <TouchableOpacity onPress={() =>
                  navigation.navigate('SourceScreen',
                    {
                      data: item
                    })}>
                  <View style={styles.moreContainer}>
                    <Text>VIEW</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 28
  },
  projectText: {
    flex: 1,
    flexDirection: 'column',
  },

  projectRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
  },

  itemName: {
    fontSize: 18,
    color: '#4A90E2',
  },

  itemDetails: {
    fontSize: 12,
    color: '#BBBBBB',
  },

  moreContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default NewsSourceScreen;