import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, navigator, StyleSheet } from 'react-native';

import ThreeScene from './ThreeScene';

/**
 * 第二页
 */
export default class SecondPage extends Component {

    constructor(props) {
        super(props)
        console.log("myscene js");
    }

    gotoNext2(name) {
        this.props.navigator.push({
            component: ThreeScene,
            passProps: {
                id: name
            },
        })
    }

  render() {
      console.log("-----------SecondPage render");

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=>this.props.navigator.pop()}>
                <Text style={styles.buttonText}>
                    返回上一页, 来源: {this.props.id}
                </Text>
            </TouchableOpacity>
            <Text> </Text>
            <TouchableOpacity style={styles.button} onPress={()=>this.gotoNext2("sssss")}>
                <Text style={styles.buttonText}>
                    next
                </Text>
            </TouchableOpacity>
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
    backgroundColor: 'white'
  },
  // 按钮
  button: {
    height: 60,
    marginTop: 0,
    justifyContent: 'center', // 内容居中显示
    backgroundColor: 'blue',
    alignItems: 'center'
  },
  // 按钮文字
  buttonText: {
    fontSize: 18,
    color: '#ffffff'
  },
  // 左面导航按钮
  leftNavButtonText: {
    color: '#ffffff',
    fontSize: 18,
    marginLeft: 13
  },
  // 右面导航按钮
  rightNavButtonText: {
    color: '#ffffff',
    fontSize: 18,
    marginRight: 13
  },
  // 标题
  title: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    flex: 1                //Step 3
  }
});
