import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';

export default class FirstViewController extends Component {
    constructor(props) {
        super(props);
    }

    aaa(aa){
        var i = 1;
        return aa.map((item)=>{
            i++;
            if (i%2==0) {
                var color = 'red';
                var overflow = 'visible';
            }else {
                var color = 'blue';
                var overflow = 'scroll';
            }

            var textStyle = StyleSheet.create({
                text:{
                    backgroundColor:color,
                    height:(50 + i *20),
                    width:100,
                    margin:5,
                    overflow:overflow,
                    padding:10
                }
            });

            return(<Text key={item} style={textStyle.text}>
                FirstViewController {item},FirstViewController {item},FirstViewController {item},
                FirstViewController {item},FirstViewController {item},FirstViewController {item}
            </Text>);
        })
    }

    render() {
        var aa = ["a", "b", "c", "d", "e", "f", "g"];
        // var aa = ["a", "b"];
        return (
            <View style={styles.container}>
            {this.aaa(aa)}
            </View>
        );
    }
}

var styles = StyleSheet.create({
    // 页面框架
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 64,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        flexWrap:'wrap'
    },
    text: {

    }
});
