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
import data from './dummy_data';
import Header from './components/header';
import Video from './components/video';

console.disableYellowBox = true;

export default class App extends Component {
   nFormatter = (num, digits) => {
    var si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "K" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
  }
  render() {
    let items = [{something: 'data'}, {something: 'data'}, {something: 'data'}, {something: 'data'}, {something: 'data'}, {something: 'data'}, {something: 'data'}];
    return (
      <View style={styles.container}>
        <Header />
        <FlatList data={data.items} renderItem={(curr) => {
          return <View key={curr.item.id.videoId}>
                    <Video
                      thumbnail={curr.item.snippet.thumbnails.high.url}
                      userThumbnail={curr.item.snippet.thumbnails.default.url}
                      title={curr.item.snippet.title}
                      channelName={curr.item.snippet.channelTitle}
                      views={this.nFormatter(curr.item.views)}
                      date={Math.floor(Math.random() * 30)}
                  />
                  <View style={styles.divider} />
                </View>
        }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    height: 0.5,
    backgroundColor: '#c2c2c2',
    marginBottom: 3,
  }
});
