'use strict'; // 启用严格模式

import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator, TouchableOpacity, StyleSheet } from 'react-native';

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

        var title = "title";
        if (route.title) {
            title=route.title;
        }else {
            title=route.name;
        }
        
        return (
            <View style={styles.navContainer}>
                <Text style={styles.title}>
                    应用标题{title}
                </Text>
            </View>
        );
    }
};

// 主模块
export default class BaseNavigator extends Component {
  /**
   * 使用动态页面加载
   * @param route 路由
   * @param navigator 导航器
   * @returns {XML} 页面
   */
    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }

    configureScene(route, routeStack) {
        if (route.type == 'Modal') {
            return Navigator.SceneConfigs.FloatFromBottom;
        }else{
            return Navigator.SceneConfigs.PushFromRight;
        }
    }

    render() {
        if (this.props.rootScene) {
            return (
                <Navigator
                    style={{flex:1}}
                    initialRoute={{name: 'FirstPage', component: this.props.rootScene}}
                    configureScene={(route, routeStack)=>{
                        console.log("Navigator === configureScene");

                        if (route.type == 'Modal') {
                            return Navigator.SceneConfigs.FloatFromBottom;
                        }else{
                            return Navigator.SceneConfigs.PushFromRight;
                        }
                    }}
                    renderScene={(route, navigator)=>{
                        console.log("Navigator === renderScene");

                        return <route.component navigator={navigator} route={route} {...route.passProps} />;
                    }}
                    navigationBar={
                        <Navigator.NavigationBar style={styles.navContainer} routeMapper={NavigationBarRouteMapper}/>
                    }
                    onDidFocus={(route)=>{
                        console.log("Navigator === onDidFocus");
                        console.log(route);
                    }}
                    onWillFocus={(route)=>{
                        console.log("Navigator === onWillFocus");
                        console.log(route);
                    }}
                />
            );
        } else {
            return (
                <View>
                    <Text>NO ROOTSCENE</Text>
                </View>
            );
        }
    }
}

var styles = StyleSheet.create({
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
