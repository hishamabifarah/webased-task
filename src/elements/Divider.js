import React, { Component } from 'react';
import { StyleSheet , View } from 'react-native';



export const Divider =  () => {

return (
  <View
  style={styles.divider}
/>
)
}

export const styles = StyleSheet.create({
  divider: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    height: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})
