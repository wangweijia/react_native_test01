'use strict'; // 启用严格模式

import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator, TouchableOpacity, StyleSheet } from 'react-native';

import SecondPage from './MyScene';

// 使用Component的好处是, 可以自动生成注释
export default class FirstPage extends Component {
  // 填出提示框
  onPress() {
    alert("我是Spike!");
  }

  /**
   * 跳转页面至SecondPage
   * @param name 传递参数
   * @param type 动画类型
   */
  gotoNext(name, type = 'Normal') {
    this.props.navigator.push({
        name: "secondPage",
        component: SecondPage,
        passProps: {
            id: name
        },
        onPress: this.onPress,
        rightText: 'ALERT!',
        type: type
    })
  }

  render() {
    // 点击按钮使用Home页面入栈
    console.log("-----------FirstPage render");

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>this.gotoNext('第一页')}>
                <Text style={styles.buttonText}>
                    {'跳转至第二页(右出)'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>this.gotoNext('第一页', 'Modal')}>
                <Text style={styles.buttonText}>
                    {'跳转至第二页(底部)'}
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
    marginTop: 100,
    flexDirection: 'column',
    alignItems: 'center'
  },
  // 导航栏
  navContainer: {
    backgroundColor: '#81c04d',
    paddingTop: 12,
    paddingBottom: 10,
  },
  // 导航栏文字
  headText: {
    color: '#ffffff',
    fontSize: 22
  },
  // 按钮
  button: {
    height: 60,
    width:200,
    marginTop: 10,
    justifyContent: 'center', // 内容居中显示
    backgroundColor: '#ff1049',
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
