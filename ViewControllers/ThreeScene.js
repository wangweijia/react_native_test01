import React, { Component } from 'react';
import { View, Text, TouchableOpacity, navigator, StyleSheet } from 'react-native';

// 导航栏的Mapper
var NavigationBarRouteMapper = {
  // 左键
    LeftButton(route, navigator, index, navState) {
        console.log("LeftButton");
        if (index > 0) {
            return (
                <View style={styles.navContainer}>
                    <TouchableOpacity
                        underlayColor='transparent'
                        onPress={() => {
                            if (index > 0) {
                                navigator.pop()
                            }}}>
                        <Text style={styles.leftNavButtonText}>
                            后退
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return null;
        }
    },
    // 右键
    RightButton(route, navigator, index, navState) {
        console.log("RightButton");
        if (route.onPress) {
            return (
                <View style={styles.navContainer}>
                    <TouchableOpacity
                        onPress={() => route.onPress()}>
                        <Text style={styles.rightNavButtonText}>
                            {route.rightText || '右键'}
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }
    },
    // 标题
    Title(route, navigator, index, navState) {
        console.log("Title");
        console.log(route);

        return (
            <View style={styles.navContainer}>
                <Text style={styles.title}>
                    应用标题{route.name}
                </Text>
            </View>
        );
    }
};


export default class ThreeScene extends Component {
    constructor(props) {
        super(props)
        // console.log(props.navigator);

        // props.navigator.navigationBar
        this.props.route.onPress=()=>{
            this.props.navigator.pop();
        };
        this.props.route.rightText="wwj";
        this.props.route.title="t page";
    }

    render() {
        console.log("-----------ThreePage render");
        return(
            <View style={styles.container}>
                <Text>
                    ThressScene.js
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    // 页面框架
    container: {
        flex: 4,
        flexDirection: 'column',
        marginTop: 64,
        backgroundColor: 'red'
    }
});
