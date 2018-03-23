import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList
 } from 'react-native';
 import Icon from 'react-native-vector-icons/MaterialIcons';
 import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

 export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIcon: 'home'
        };
    }
   render() {
        return (
            <View style={styles.container}>
                <View style={styles.taskBar}>
                    <Text style={styles.pageName}>
                        Home
                    </Text>
                    <View style={styles.taskBarItems}>
                        <TouchableOpacity>
                            <Icon style={styles.taskBarItem} name="search" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon style={styles.taskBarItem} name="more-vert" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.taskBar, styles.iconTaskBar]}>
                    <TouchableOpacity style={styles.icons} onPress={() => {
                        this.setState({
                            selectedIcon: 'home',
                        })
                    }}>
                        <Icon name="home" style={styles.iconsText} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icons} onPress={() => {
                        this.setState({
                            selectedIcon: 'trending',
                        })
                    }}>
                        <Icon style={styles.iconsText} name="whatshot" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icons} onPress={() => {
                        this.setState({
                            selectedIcon: 'subscriptions',
                        })
                    }}>
                        <Icon style={styles.iconsText} name="subscriptions" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icons} onPress={() => {
                        this.setState({
                            selectedIcon: 'shared',
                        })
                    }}>
                        <CommunityIcon style={styles.iconsText} name="share" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icons} onPress={() => {
                        this.setState({
                            selectedIcon: 'profile',
                        })
                    }}>
                        <CommunityIcon style={styles.iconsText} name="account" />
                    </TouchableOpacity>
                </View>
                <View style={styles.underlineBar}>
                    <View style={[this.state.selectedIcon === 'home' ? styles.underline : '', styles.flexOne]} />
                    <View style={[this.state.selectedIcon === 'trending' ? styles.underline : '', styles.flexOne]} />
                    <View style={[this.state.selectedIcon === 'subscriptions' ? styles.underline : '', styles.flexOne]} />
                    <View style={[this.state.selectedIcon === 'shared' ? styles.underline : '', styles.flexOne]} />
                    <View style={[this.state.selectedIcon === 'profile' ? styles.underline : '', styles.flexOne]} />]   
                </View>
            </View>
        );
    }
 }

 const styles = StyleSheet.create({
     container : {
         paddingTop: 16,
         backgroundColor: 'red',
         // Please check why the elevation is not working on iOS. Is it working on Android?
         elevation: 5,
     },
     taskBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        height: 50,
        alignItems: 'center',
     },
     pageName: {
         color: 'white',
         fontWeight: "500",
         fontSize: 20,
     },
     taskBarItems: {
         flexDirection: 'row',
     },
     taskBarItem: {
         fontSize: 24,
         marginHorizontal: 5,
         color: 'white',
     },
     iconTaskBar: {
         flexDirection: 'row',
         justifyContent: 'space-around',
         alignItems: 'center',
     },
     iconsText: {
         fontSize: 26,
         color: 'white',
     },
     underline: {
         height: 5,
         borderRadius: 3,
         position: 'relative',
         backgroundColor: 'white',
         elevation: 5,
         top: 1.4,
         borderColor: '#eee',
         borderWidth: 0.5,
     },
     underlineBar: {
         flexDirection: 'row',
     },
     flexOne: {
         flex: 1,
     }
 })
 