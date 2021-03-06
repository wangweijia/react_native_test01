'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import BaseNavigator from './BaseComponent/BaseNavigator';
import BaseTabBar from './BaseComponent/BaseTabBar';

class MainController extends Component {
    render () {
        return (
            <BaseNavigator rootScene={BaseTabBar} />
        )
    }
}

// 可以选择添加页面
AppRegistry.registerComponent('test01', () => {
    return MainController;
});
