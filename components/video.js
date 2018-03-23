 import React, { Component } from 'react'
 import {
     Text, 
     View ,
     StyleSheet,
     TouchableOpacity,
     Image,
     Platform
    } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
 
 export default class Video extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Image style={styles.thumbnail} source={{uri: this.props.thumbnail}} />
            <View style={styles.videoContent}>
                <Image source={{uri: this.props.userThumbnail}} style={styles.userIcon} />
                <View style={styles.videoInfo}>
                    <Text numberOfLines={2} style={styles.videoTitle}>
                        {this.props.title}
                    </Text>
                    <Text style={styles.channelInfo}>
                        {this.props.channelName} · {this.props.views} views
                    </Text>
                    <Text style={styles.timeElapsed}>
                        { this.props.date } days ago
                    </Text>
                </View>
                <Icon name="more-vert" style={styles.moreIcon} />
            </View>
        </View>
        )
    }
 }

 const styles = StyleSheet.create({
     container: {
         padding: 15,
     },
     thumbnail: {
         height: 200,
         borderColor: '#eee',
         borderWidth: 1,
     },
     videoContent: {
        flexDirection: 'row',
        marginTop: 10
     },
     userIcon: {
        height: 50,
        width: 50,
        borderRadius: 25,
     },
     videoInfo: {
         flexDirection: 'column',
         flex: 3,
         paddingHorizontal: 10,
     },
     videoTitle: {
        fontWeight: '500',
        fontSize: 16,
        color: 'black',
     },
     channelInfo: {
        color: 'gray',
        marginTop: 4,
     },
     timeElapsed: {
         color: 'gray',
     },
     moreIcon: {
         fontSize: 18,
         color: 'gray'
     },
 })