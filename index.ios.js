'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

// var SimpleView = require('./navigator_simple.js');
// var UniformView = require('./navigator_uniform.js');
import BaseNavigator from './BaseNavigator';
import BaseTabBar from './BaseTabBar';

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
