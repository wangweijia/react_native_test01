'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

// var SimpleView = require('./navigator_simple.js');
// var UniformView = require('./navigator_uniform.js');
import FirstPage from './FirstPage';
import SimpleView from './navigator_simple';
import BaseNavigator from './BaseNavigator';

class MainController extends Component {
    render () {
        return (
            <BaseNavigator rootScene={FirstPage} />
        )
    }
}

// 可以选择添加页面
AppRegistry.registerComponent('test01', () => {
    return FirstPage;
});
