/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
//import data from './dummy_data';
import Header from './components/header';
export default class App extends Component {
  render() {
    let items = [{something: 'data'}, {something: 'data'}, {something: 'data'}, {something: 'data'}, {something: 'data'}, {something: 'data'}, {something: 'data'}];
    return (
      <View style={styles.container}>
        <Header />
        <FlatList renderItem={(curr) => <Text>{curr.something}</Text>} data={items} onScroll={(e)=> {console.log(e)}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
